import { OpenAI } from "@langchain/openai";
import { assessments, type Assessment } from "@/data/assessments";
import axios from "axios";

// Initialize OpenAI client using direct constructor
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
  temperature: 0.2,
});

interface RecommendationResult {
  recommendations: Assessment[];
  reasoning: string;
}

/**
 * Fetch content from a URL
 */
export async function fetchUrlContent(url: string): Promise<string> {
  try {
    const response = await axios.get(url);

    // Simple HTML cleaning to extract text (basic implementation)
    let content = response.data;
    content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ");
    content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ");
    content = content.replace(/<[^>]*>/g, " ");
    content = content.replace(/\s+/g, " ").trim();

    // Limit content length for token limits
    return content.substring(0, 5000);
  } catch (error) {
    console.error("Error fetching URL content:", error);
    throw new Error("Failed to fetch content from the provided URL");
  }
}

/**
 * Generate assessment recommendations based on text input
 */
export async function getRecommendations(input: string, maxResults = 10): Promise<RecommendationResult> {
  try {
    // If input is a URL, fetch its content
    let queryText = input;
    if (input.startsWith("http://") || input.startsWith("https://")) {
      queryText = await fetchUrlContent(input);
    }

    // Create a condensed representation of assessments for the prompt
    const assessmentData = assessments.map(a => ({
      id: a.id,
      name: a.name,
      description: a.description,
      skills: a.skills.join(", "),
      testType: a.testType,
      duration: a.duration,
      category: a.category
    }));

    // Use the OpenAI API directly instead of langchain
    const apiKey = process.env.OPENAI_API_KEY || "";
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are an expert at matching job descriptions or queries with relevant assessment tests.
            Your task is to recommend SHL assessments that would help evaluate candidates for the given job description or query.
            Focus on skills, requirements, and context from the query. Return exactly JSON with recommendations and reasoning.`
          },
          {
            role: "user",
            content: `Based on this job description or query: "${queryText}",
            recommend the most appropriate assessments from the following options.
            Consider skills, job requirements, and test duration. Return at most ${maxResults} assessments.

            Available assessments:
            ${JSON.stringify(assessmentData, null, 2)}

            Respond with a JSON object with two fields:
            1. "ids": An array of assessment IDs (strings) in order of relevance
            2. "reasoning": A brief explanation of why these assessments were selected

            Example response:
            {
              "ids": ["3", "7", "12"],
              "reasoning": "Selected based on required technical skills and seniority level mentioned in the job description."
            }`
          }
        ],
        response_format: { type: "json_object" },
        temperature: 0.2
      })
    });

    const responseData = await response.json();
    const content = responseData.choices[0]?.message?.content || "{}";

    // Parse the recommendation results
    const result = JSON.parse(content);
    const recommendedIds: string[] = result.ids || [];
    const reasoning: string = result.reasoning || "No specific reasoning provided";

    // Map IDs to actual assessment objects
    const recommendedAssessments = recommendedIds
      .map((id: string) => assessments.find(a => a.id === id))
      .filter((a): a is Assessment => !!a);

    return {
      recommendations: recommendedAssessments.slice(0, maxResults),
      reasoning
    };
  } catch (error) {
    console.error("Error generating recommendations:", error);
    throw new Error("Failed to generate assessment recommendations");
  }
}

/**
 * Alternative implementation using basic keyword matching for fallback
 */
export function getRecommendationsByKeywords(input: string, maxResults = 10): Assessment[] {
  const query = input.toLowerCase();

  // Score each assessment based on keyword matches
  const scoredAssessments = assessments.map(assessment => {
    let score = 0;

    // Check name and description
    if (assessment.name.toLowerCase().includes(query)) score += 10;
    if (assessment.description.toLowerCase().includes(query)) score += 5;

    // Check skills using for...of loop instead of forEach
    for (const skill of assessment.skills) {
      if (query.includes(skill.toLowerCase())) score += 3;
    }

    // Check category and test type
    if (assessment.category.toLowerCase().includes(query)) score += 2;
    if (assessment.testType.toLowerCase().includes(query)) score += 2;

    return { assessment, score };
  });

  // Sort by score and return top results
  return scoredAssessments
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(item => item.assessment);
}

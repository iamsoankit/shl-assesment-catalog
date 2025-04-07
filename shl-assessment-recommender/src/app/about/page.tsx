"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">About This Project</h1>
          <p className="text-gray-600 text-lg">
            Learn about the SHL Assessment Recommender and how it works
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Understanding the SHL Assessment Recommender
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The SHL Assessment Recommender is an intelligent tool designed to help hiring managers find
                the most relevant assessments from SHL's catalog based on job descriptions or specific requirements.
                It solves the common problem of having to manually search through numerous assessments to
                find the right match for a particular role.
              </p>
              <p className="mb-4">
                Our solution takes a natural language query, job description text, or URL as input and
                leverages AI to recommend the most appropriate SHL assessments for evaluating candidates.
              </p>
              <Alert className="mb-4">
                <AlertTitle>Key Features</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Natural language query processing</li>
                    <li>URL content extraction for job descriptions</li>
                    <li>AI-powered assessment recommendations</li>
                    <li>Fallback keyword-based matching</li>
                    <li>Comprehensive API for integration</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Technical Approach</CardTitle>
              <CardDescription>
                How the recommendation system works
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Data Processing</h3>
              <p className="mb-4">
                For each query, we process the input text through the following steps:
              </p>
              <ol className="list-decimal ml-6 mb-4 space-y-2">
                <li>
                  <strong>Input Processing:</strong> We handle direct text inputs and URLs differently.
                  For URLs, we extract and clean the content, removing HTML tags and limiting token length.
                </li>
                <li>
                  <strong>AI Analysis:</strong> The processed text is analyzed using a language model to understand
                  the skills, requirements, and context of the job description.
                </li>
                <li>
                  <strong>Assessment Matching:</strong> Based on the analysis, we match the requirements against
                  our database of SHL assessments, considering factors like skills, duration, and test type.
                </li>
                <li>
                  <strong>Fallback Mechanism:</strong> If the AI matching encounters issues, we fall back to a
                  keyword-based matching system that scores assessments based on relevance.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-2 mt-6">Technology Stack</h3>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>Frontend:</strong> Next.js with React, Tailwind CSS, and Shadcn UI components</li>
                <li><strong>API:</strong> Next.js API routes with serverless functions</li>
                <li><strong>AI:</strong> OpenAI's GPT for natural language understanding</li>
                <li><strong>Deployment:</strong> Netlify for hosting both frontend and serverless backend</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Evaluation Metrics</CardTitle>
              <CardDescription>
                How the system's performance is measured
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The effectiveness of our recommendation system is evaluated using industry-standard ranking metrics:
              </p>

              <h3 className="text-xl font-semibold mb-2">Mean Recall@K</h3>
              <p className="mb-2">
                This metric measures how many of the relevant assessments were retrieved in the top K recommendations,
                averaged across all test queries.
              </p>
              <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm mb-4">
{`Recall@K = Number of relevant assessments in top K / Total relevant assessments for the query

MeanRecall@K = (1/N) * ∑(Recall@K)`}
              </pre>

              <h3 className="text-xl font-semibold mb-2">Mean Average Precision @K (MAP@K)</h3>
              <p className="mb-2">
                MAP@K evaluates both the relevance and ranking order of retrieved assessments by calculating
                Precision@k at each relevant result and averaging it over all queries.
              </p>
              <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm mb-4">
{`AP@K = (1/min(K,R)) * ∑P(k) * rel(k)

MAP@K = (1/N) * ∑AP@K_i`}
              </pre>
              <p className="text-sm text-gray-600 mb-4">
                Where:
                <br />• R = total relevant assessments for the query
                <br />• P(k) = precision at position k
                <br />• rel(k) = 1 if the result at position k is relevant, otherwise 0
                <br />• N = total number of test queries
              </p>

              <Alert className="bg-blue-50">
                <AlertTitle>Continuous Improvement</AlertTitle>
                <AlertDescription>
                  We regularly test our system with benchmark queries and refine our algorithms based on
                  these evaluation metrics to ensure the highest quality recommendations.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

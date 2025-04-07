import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "SHL Assessment Recommender API",
    version: "1.0.0",
    description: "API for recommending SHL assessments based on job descriptions or queries",
    endpoints: [
      {
        path: "/api/recommend",
        method: "GET",
        description: "Get assessment recommendations",
        parameters: [
          {
            name: "query",
            type: "string",
            description: "Job description, natural language query, or URL",
            required: true
          },
          {
            name: "max",
            type: "number",
            description: "Maximum number of recommendations to return (default: 10)",
            required: false
          }
        ]
      }
    ]
  });
}

"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DocsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Documentation</h1>
          <p className="text-gray-600 text-lg">
            Learn how to use the SHL Assessment Recommender API
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
              <CardDescription>
                Overview of the SHL Assessment Recommender
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The SHL Assessment Recommender is a tool that helps hiring managers find the most relevant
                assessments for their job openings. It uses natural language processing to analyze job descriptions
                and recommend appropriate assessments from SHL's product catalog.
              </p>
              <p>
                You can use this service in two ways:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Through the web interface on the <Link href="/" className="text-blue-600 hover:underline">homepage</Link></li>
                <li>Via direct API calls for integration into your own systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>
                How to integrate with the SHL Assessment Recommender API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Base URL</h3>
              <p className="mb-4 font-mono bg-gray-100 p-2 rounded">{typeof window !== 'undefined' ? window.location.origin : ''}/api</p>

              <h3 className="text-xl font-semibold mb-2 mt-6">Endpoints</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-1">GET /recommend</h4>
                  <p className="mb-2">Get assessment recommendations based on a job description or query</p>

                  <h5 className="font-medium mt-4 mb-1">Parameters</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><span className="font-mono">query</span> <span className="text-gray-500">(required)</span>: Job description, natural language query, or a URL to a job posting</li>
                    <li><span className="font-mono">max</span> <span className="text-gray-500">(optional)</span>: Maximum number of recommendations to return (default: 10)</li>
                  </ul>

                  <h5 className="font-medium mt-4 mb-1">Example Request</h5>
                  <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
                    {`GET ${typeof window !== 'undefined' ? window.location.origin : ''}/api/recommend?query=Java developers who can collaborate with business teams&max=5`}
                  </pre>

                  <h5 className="font-medium mt-4 mb-1">Response Format</h5>
                  <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
{`{
  "success": true,
  "recommendations": [
    {
      "id": "9",
      "name": "Java Programming",
      "url": "https://www.shl.com/solutions/products/product-catalog/",
      "remoteTestingSupport": true,
      "adaptiveIRTSupport": true,
      "duration": "45 minutes",
      "testType": "Technical Skills",
      "description": "...",
      "skills": ["Java", "Object-Oriented Programming", ...],
      "category": "Technical Skills"
    },
    ...
  ],
  "reasoning": "Selected based on Java development skills and collaboration requirements..."
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Examples</CardTitle>
              <CardDescription>
                Sample queries and how to use them
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Sample Queries</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium">Example 1: Technical Role</h4>
                  <p className="text-gray-600 italic">
                    "Java developers who can collaborate effectively with business teams"
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Example 2: Mixed Technical Skills</h4>
                  <p className="text-gray-600 italic">
                    "Looking to hire mid-level professionals who are proficient in Python, SQL and JavaScript"
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Example 3: Business Skills with Time Constraint</h4>
                  <p className="text-gray-600 italic">
                    "I am hiring for an analyst and want applications to screen using Cognitive and personality tests, what options are available within 45 mins"
                  </p>
                </div>
              </div>

              <Alert className="bg-blue-50">
                <AlertTitle>Pro Tip</AlertTitle>
                <AlertDescription>
                  For best results, include specific skills, job level, and any time constraints in your query.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

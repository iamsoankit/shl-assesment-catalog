"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { Assessment } from "@/data/assessments";
import axios from "axios";
import { Toaster } from "sonner";
import { toast } from "sonner";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [inputType, setInputType] = useState<"text" | "url">("text");
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [recommendations, setRecommendations] = useState<Assessment[]>([]);
  const [reasoning, setReasoning] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setErrorMessage("Please enter a query or job description");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.get("/api/recommend", {
        params: {
          query: query.trim(),
          max: 10,
        },
      });

      if (response.data.success) {
        setRecommendations(response.data.recommendations);
        setReasoning(response.data.reasoning);

        if (response.data.recommendations.length === 0) {
          toast.info("No matching assessments found. Try a different query.");
        }
      } else {
        setErrorMessage(response.data.error || "Failed to get recommendations");
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setErrorMessage("An error occurred while fetching recommendations");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Toaster position="top-right" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">SHL Assessment Recommender</h1>
          <p className="text-gray-600 text-lg">
            Find the perfect assessments for your job openings
          </p>
        </div>

        <Card className="mb-8 shadow-md">
          <CardHeader>
            <CardTitle>Find the Right Assessments</CardTitle>
            <CardDescription>
              Enter a job description, natural language query, or URL to get relevant assessment recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="text" onValueChange={(value) => setInputType(value as "text" | "url")}>
              <TabsList className="mb-4">
                <TabsTrigger value="text">Text Input</TabsTrigger>
                <TabsTrigger value="url">URL Input</TabsTrigger>
              </TabsList>

              <TabsContent value="text">
                <Textarea
                  placeholder="Enter job description or skills query (e.g., 'Java developers who can collaborate with business teams')"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-40 mb-4"
                />
              </TabsContent>

              <TabsContent value="url">
                <Input
                  placeholder="Enter job description URL (e.g., https://example.com/job-posting)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="mb-4"
                  type="url"
                />
              </TabsContent>
            </Tabs>

            {errorMessage && (
              <Alert variant="destructive" className="mb-4">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}

            <Button
              onClick={handleSearch}
              disabled={loading}
              className="w-full"
              size="lg"
            >
              {loading ? "Searching..." : "Get Recommendations"}
            </Button>
          </CardContent>
        </Card>

        {recommendations.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Recommended Assessments</h2>

            {reasoning && (
              <Alert className="mb-6 bg-blue-50">
                <AlertTitle>Recommendation Reasoning</AlertTitle>
                <AlertDescription>{reasoning}</AlertDescription>
              </Alert>
            )}

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Assessment Name</TableHead>
                    <TableHead>Remote Testing</TableHead>
                    <TableHead>Adaptive/IRT</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Test Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recommendations.map((assessment) => (
                    <TableRow key={assessment.id}>
                      <TableCell className="font-medium">
                        <a
                          href={assessment.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {assessment.name}
                        </a>
                      </TableCell>
                      <TableCell>{assessment.remoteTestingSupport ? "Yes" : "No"}</TableCell>
                      <TableCell>{assessment.adaptiveIRTSupport ? "Yes" : "No"}</TableCell>
                      <TableCell>{assessment.duration}</TableCell>
                      <TableCell>{assessment.testType}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

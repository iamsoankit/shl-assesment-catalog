import { type NextRequest, NextResponse } from "next/server";
import { getRecommendations, getRecommendationsByKeywords } from "@/lib/recommendation";

// Configure CORS headers for API access
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const maxStr = searchParams.get("max");
    const max = maxStr ? Number.parseInt(maxStr, 10) : 10;

    if (!query) {
      return NextResponse.json(
        { error: "Query parameter is required" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Get recommendations based on the query
    try {
      const result = await getRecommendations(query, Math.min(max, 10));

      return NextResponse.json({
        success: true,
        recommendations: result.recommendations,
        reasoning: result.reasoning
      }, { headers: corsHeaders });
    } catch (error) {
      console.error("Error using AI recommendation:", error);

      // Fallback to keyword-based recommendation
      const recommendations = getRecommendationsByKeywords(query, Math.min(max, 10));

      return NextResponse.json({
        success: true,
        recommendations,
        reasoning: "Recommendations based on keyword matching (AI fallback)"
      }, { headers: corsHeaders });
    }
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to generate recommendations" },
      { status: 500, headers: corsHeaders }
    );
  }
}

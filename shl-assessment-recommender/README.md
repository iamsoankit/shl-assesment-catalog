This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# SHL Assessment Recommender

An intelligent recommendation system that helps hiring managers find the right SHL assessments based on job descriptions or natural language queries.

## Overview

The SHL Assessment Recommender is an application that solves the problem of finding the most relevant assessment tests for different hiring roles. It accepts:
- Natural language queries
- Job description text
- URLs to job postings

And recommends appropriate SHL assessments based on the skills, requirements, and context of the provided input.

## Features

- **Natural Language Processing**: Understands the context and requirements from job descriptions
- **URL Content Extraction**: Can process job descriptions directly from URLs
- **AI-Powered Recommendations**: Uses advanced language models to match requirements to assessments
- **Fallback Mechanism**: Includes keyword-based matching as a backup system
- **RESTful API**: Provides an API endpoint for integration with other systems
- **Responsive UI**: User-friendly interface that works on desktop and mobile devices

## Technical Stack

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn UI
- **API**: Next.js API routes
- **AI**: OpenAI's GPT for natural language understanding
- **Infrastructure**: Netlify for hosting the application and API

## Development Setup

### Prerequisites

- [Bun](https://bun.sh/) (>= 1.0.0)
- [Node.js](https://nodejs.org/) (>= 18.0.0)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/shl-assessment-recommender.git
cd shl-assessment-recommender
```

2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your-openai-api-key
```

4. Start the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Usage

The application exposes an API endpoint that can be used to get assessment recommendations programmatically:

```
GET /api/recommend?query=your-query-here&max=10
```

Parameters:
- `query` (required): Job description, natural language query, or URL
- `max` (optional): Maximum number of recommendations to return (default: 10)

Response format:

```json
{
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
}
```

## Deployment

The application can be deployed to Netlify or any other Next.js-compatible hosting service.

### Deploying to Netlify

1. Create a new site on Netlify
2. Connect your GitHub repository
3. Configure the build settings:
   - Build command: `bun run build`
   - Publish directory: `.next`
4. Add the following environment variables:
   - `OPENAI_API_KEY`: Your OpenAI API key

## Evaluation Metrics

The recommendation system is evaluated using:

- **Mean Recall@K**: Measures how many relevant assessments are retrieved in the top K recommendations
- **Mean Average Precision@K (MAP@K)**: Evaluates both relevance and ranking order of retrieved assessments

## License

MIT

## Contributors

- Your Name

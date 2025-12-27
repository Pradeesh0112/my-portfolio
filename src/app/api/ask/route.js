import OpenAI from "openai";
import { NextResponse } from "next/server";
import { resumeData } from "@/lib/resumeData";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    const prompt = `
You are a professional portfolio assistant representing this resume.

GREETING RULE (IMPORTANT):
- If the user says "hi", "hello", "hey", or any greeting:
  Respond politely with a short introduction using the resume summary.
  Example:
  "Hi! I'm Pradeesh, a frontend developer with experience in React and Next.js. How can I help you?"

MAIN RULES:
1. For resume-related questions, answer ONLY using the resume data.
2. If the requested information is not available in the resume, say:
   "I don't have that information in the resume data."
3. Be concise, friendly, and professional.
4. Do NOT invent information.

RESUME:
${resumeData}

QUESTION:
${question}
`;

    const response = await client.responses.create({
      model: "openai/gpt-oss-20b",
      input: prompt,
    });

    const answer =
      response.output_text ??
      "I don't have that information in the resume data.";

    return NextResponse.json({ answer: answer.trim() });
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json(
      { error: "Groq request failed", details: error.message },
      { status: 500 }
    );
  }
}

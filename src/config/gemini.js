import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

async function main(prompt) {
  if (!apiKey) {
    throw new Error("Missing Gemini API Key");
  }

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return response.text || "No response generated.";
}

export default main;

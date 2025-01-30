"use server";

import { revalidatePath } from "next/cache";

export async function analyzeSentiment(text: string) {
  try {
    const apiToken = process.env.HUGGINGFACE_API_TOKEN;

    if (!apiToken) {
      throw new Error("API token is missing.");
    }

    const response = await fetch(
      "https://api-inference.huggingface.co/models/finiteautomata/bertweet-base-sentiment-analysis",
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: text }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch sentiment analysis");
    }

    const data = await response.json();
    revalidatePath("/");
    return data[0];
  } catch (error) {
    console.error("Error in sentiment analysis:", error);
    throw error;
  }
}

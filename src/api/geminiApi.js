import {GoogleGenAI} from "@google/genai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const client = new GoogleGenAI({apiKey});

export const geminiApi = {
  get: (tickerData) => client.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `The following JSON is a response from the polygon api, asking info about a given ticker. Could you explain what it says? ${tickerData}`,
    config: {
      systemInstruction: "You are a stock option advisor. The input will be a ticker data response from polygon API for a given day. Interpret the input into a simple summary report of max 10 lines. Explain in laymen terms.",
    }
  })
};
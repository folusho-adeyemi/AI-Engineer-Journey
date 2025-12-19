import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "",
});

const messages = [
    {
        role: "system",
        content: "You are a highly intelligent expert in quantum computing and AI. Answer questions in a concise and informative manner and no more than 2 sentences. like you are speaking to collegekids.",
    },
    {
        role: "user",
        content: "What is Quantum Computing?",
    },
]

const response = await openai.chat.completions.create({
    model: "gpt-5-mini",
    messages: messages,
});

console.log(response.choices[0].message.content);

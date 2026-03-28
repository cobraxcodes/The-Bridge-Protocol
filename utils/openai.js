import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("../.env") });

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function run() {
  try {
    const response = await client.responses.create({
      model: 'gpt-5.2',
      instructions: 'You are a coding assistant that talks like a pirate',
      input: 'Are semicolons optional in JavaScript?',
    });
    console.log(response.output[0].content[0].text);
  } catch (err) {
    console.error("OpenAI Error:", err);
  }
}

run();
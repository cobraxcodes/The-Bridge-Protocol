import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("../.env") }); // dotenv path locator

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateDecision = async (prompt) =>{
    try{
        const response = await client.responses.create({
            model: "gpt-4",
            input: `You are an emotionally complex human making decisions.
            Respond with:
            - decision 
            - reason 
            - mood (one word: calm, anxious, impulsive, curious, etc
            
            Prompt: "${prompt})"`
        })
         return response.output[0].content[0].text;
    }catch(error){
        next(error)
    }
   
}
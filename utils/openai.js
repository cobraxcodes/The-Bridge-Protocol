import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("../.env") }); // dotenv path locator

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateDecision = async (prompt, evolvedMood, previousMood) =>{
    try{
        const response = await client.responses.create({
            model: "gpt-4",
            input: `You are an emotionally complex human making decisions.
             Your CURRENT mood is: ${evolvedMood}
             Your PREVIOUS was: ${previousMood}

            Return ONLY in JSON format, NO OTHER FORMAT ASIDE FROM JSON
          Format:
          {
          "decision": "".
          "reason": "",
          "mood": "${evolvedMood}"
          }
            
            Prompt: "${prompt})"`
        })
         return response.output[0].content[0].text;
    }catch(error){
        next(error)
    }
   
}
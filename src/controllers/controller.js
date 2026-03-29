import { generateDecision } from "../../utils/openai.js"
import Decision from "../models/models.js"
import { nextMood } from "../../utils/emotion.engine.js"

export const decide = async(req,res,next) =>{
    try{
        const {prompt} = req.body
        const userId = 1;
        if(!prompt) {
            console.log('No Prompt Received')
            return res.status(400).json({error: "Prompt is required"})
        }
        const lastDecision = await Decision.findOne({ userId }).sort({ createdAt: -1 })
        const previousMood = lastDecision ? lastDecision.mood: neutral
        const evolvedMood = nextMood(previousMood)

        const aiResponse = await generateDecision(prompt, evolvedMood, previousMood)
        const parsed = JSON.parse(aiResponse)

        await Decision.create({
            userId,
            prompt,
            decision: parsed.decision,
            reason: parsed.reason,
            mood: parsed.mood
        })

        console.log(aiResponse)
        res.json({
            prompt,
            ... parsed,
            previousMood
        })
    }catch(error){
        next(error)
    }
}



import { generateDecision } from "../../utils/openai.js"


export const decide = async(req,res,next) =>{
    try{
        const {prompt} = req.body
        if(!prompt) {
            console.log('No Prompt Received')
            return res.status(400).json({error: "Prompt is required"})
        }
        const aiResponse = await generateDecision(prompt)
        const parsed = JSON.parse(aiResponse)
        console.log(aiResponse)
        res.json({
            prompt,
            decision: parsed.decision,
            reason: parsed.reason,
            mood: parsed.mood
        })
    }catch(error){
        next(error)
    }
}



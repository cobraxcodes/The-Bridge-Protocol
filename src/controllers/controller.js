import { generateDecision } from "../../utils/openai.js"


export const decide = async(req,res,next) =>{
    try{
        const {prompt} = req.body
        if(!prompt) {
            console.log('No Prompt Received')
            return res.status(400).json({error: "Prompt is required"})
        }
        const aiResponse = await generateDecision(prompt)
        res.json({
            prompt,
            result: aiResponse
        })
    }catch(error){
        next(error)
    }
}



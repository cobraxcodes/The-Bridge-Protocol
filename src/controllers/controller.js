


export const decide = async(req,res,next) =>{
    try{
        const {prompt} = req.body
        if(!prompt) {
            console.log('No Prompt Received')
            return res.status(400).json({error: "Prompt is required"})
        }if(prompt){
            const mood = ["calm", "anxious", "impulsive", "curious"][Math.floor(Math.random() * 4) ]
        const decision = mood === "impulsive"? "Do it now!":"Think about it carefully"
        res.json({
            prompt,
            decision,
            mood,
            reason: `Generated based on ${mood} state.`
        })
        }
    }catch(error){
        next(error)
    }
}



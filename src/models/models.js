import mongoose from "mongoose";

const decisionSchema = new mongoose.Schema(
    {
        userId:{
            type: Number,
            required: true
        },
        prompt: {
            type: String,
            required: true,
        },
        decision: String,
        mood: String,
        reason: String,
        spontaneityScore: Number,
        emotionalWeight: Number,
    },
    {timestamps: true}
)

export default mongoose.model("Decision", decisionSchema)
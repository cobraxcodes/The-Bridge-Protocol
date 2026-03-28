import express from 'express'
import { router as decisionRoute } from '../routes/routes.js'
// ADD SECURITY PACKAGES HERE LATER


const app = express()

// ADD TEMPLATING ENGINES HERE


// ADD MIDDLEWARE HERE
app.use(express.json()); // built in middleware in express . helps read JSON data from client (POST/PUT requests)
app.use("/decide", decisionRoute)


// ROUTES HERE
app.get("/", (req,res) =>{
    res.send("Bridge Protocol API running")
})


// GLOBAL ERROR HANDLER
app.use((error,res)=>{
    logger.error(`Something went wrong! Error: ${error.message} \n Stack Trace: ${error.stack}`)
    res.status(500).send('Something went wrong! Please try again later!')
})

export default app
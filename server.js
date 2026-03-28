require("dotenv").config()
const app = require ("./src/app")

const PORT = process.env.port || 3000;


// Async fn to connect to database
const start = async() =>{
    try{
        await connect()
        app.listen(PORT, () =>{
            console.log(`Server is listening on PORT ${PORT}`)
        })
    }catch(error){
        logger.error(`Unable to connect to server. Error: ${error.message} \n Stack Trace: ${error.stack}`)
    }
}

start()
import dotenv from 'dotenv'
dotenv.config()
import {connect} from './database/database.js'
import app from './src/config/app.js'



const PORT = process.env.PORT || 3000;


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
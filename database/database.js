import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import logger from '../utils/logger.js'

const mongoURI = process.env.MONGOURI ||"mongodb+srv://<db_username>:<db_password>@thebridgeprotocol.l0funho.mongodb.net/?appName=TheBridgeProtocol"

const connect = async() =>{
    try{
        await mongoose.connect(mongoURI)
        console.log(`Successfully connected to ${mongoose.connection.name} database`)
    }catch(error){
        logger.error(`Failed to connect to database: ${error.message} \n Stack Trace: ${error.sack}`)
        logger.info(`ENV URI: ${process.env.MONGOURI}`)
        process.exit(1)
    }
}

const disconnect = async()=>{
    await mongoose.disconnect()
}

export {connect, disconnect}
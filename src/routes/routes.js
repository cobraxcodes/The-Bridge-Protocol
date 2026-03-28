import express from 'express'
const router = express.Router()
import { decide } from "../controllers/controller.js"

router.post("/", decide)



export { router }
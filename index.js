import cors from 'cors'
import express, { json } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import web from './routes/web.js'
import connectDB from './config/connectDB.js'

const app = express()
app.use(cors())

app.use(json())

app.use("/", web)
connectDB(process.env.DB_URL)

app.listen(process.env.PORT || 8000, ()=>{
    console.log("running")
})
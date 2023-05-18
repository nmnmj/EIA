import express from 'express'
import Datacontroller from '../controller/Datacontroller.js'

const router = express.Router()

router.get("/", (req, res)=>{
    res.send("work")
})

router.get("/data", Datacontroller.alldata)

export default router
import dataModel from "../models/dataModel.js"

class Datacontroller{
    static alldata = async (req, res)=>{
        const data = await dataModel.find()
        res.send(data)
    }
}

export default Datacontroller
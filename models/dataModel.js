import mongoose from "mongoose";

const dataSchema = new mongoose.Schema()

const dataModel = mongoose.model("data", dataSchema)

export default dataModel
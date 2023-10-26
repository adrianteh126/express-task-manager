import mongoose from "mongoose"
import { commonModel } from "./models"

const collection = "Tasks"

const TaskSchema = new mongoose.Schema(
  {
    name: String,
    completed: Boolean,
    ...commonModel,
  },
  {
    collection: collection,
    versionKey: false,
  }
)

export default mongoose.model(collection, TaskSchema)

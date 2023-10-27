import mongoose from "mongoose"
import { commonModel } from "./models"

const collection = "Tasks"

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Task name is required."],
      trim: true,
      maxLength: [20, "Task name can't be more than 20 characters."],
      minLength: [1, "Type something for your task name."],
    },
    description: {
      type: String,
      requied: false,
      trim: true,
      maxLength: [100, "Task description can't be more than 100 characters."],
      default: "",
    },
    completed: {
      type: Boolean,
      required: [true, "Task completed state is required."],
      default: false,
    },
    ...commonModel,
  },
  {
    collection: collection,
    versionKey: false,
  }
)

export default mongoose.model(collection, TaskSchema)

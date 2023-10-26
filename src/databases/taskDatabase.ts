import BaseDatabase from "./baseDatabase"
import taskModel from "../models/taskModel"

export default class TaskDatabase<T> extends BaseDatabase<T> {
  constructor() {
    super(taskModel)
  }

  // More TaskDatabase values & methods here
}

import { Router } from "express"
import {
  getAllTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController"

const router = Router()

router.get("/tasks", getAllTask)
router.get("/tasks/:id", getTask)
router.post("/tasks", createTask)
router.patch("/tasks/:id", updateTask)
router.delete("/tasks/:id", deleteTask)

export default router

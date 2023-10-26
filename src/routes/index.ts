import express from "express"

import exampleRoute from "./exampleRoute"
import taskRoute from "./taskRoute"

const app = express()

app.use("/api/v1", exampleRoute, taskRoute)
export default app

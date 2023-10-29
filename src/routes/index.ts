import express from "express"

import taskRoute from "./taskRoute"
import notFoundHandler from "./notFoundHandler"

const app = express()

app.use("/api/v1", taskRoute)
app.all("*", notFoundHandler) // 404 Not Found : Stay as the last route

export default app

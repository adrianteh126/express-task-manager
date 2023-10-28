import express from "express"

import { beforeRouteMiddleware } from "./middlewares"
import routes from "./routes"
import connectDB from "./databases/connections"

const app = express()

/* Environment variables */
const port = process.env.PORT_NUMBER

/* Mount middlewares or functions */
app.use(beforeRouteMiddleware)
app.use(routes)

/* Start server */
const startServer = async () => {
  try {
    // Connect to Mongo Atlas
    await connectDB()
    // Listen for connection
    app.listen(port, () => {
      return console.log(
        `Express server listening at "http://localhost:${port}" 🚀 `
      )
    })
  } catch (err) {
    console.error(err)
  }
}

startServer()

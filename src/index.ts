import express from "express"

import middlewares from "./middlewares"
import routes from "./routes"
import connectDB from "./models/connections"

const app = express()

/* Environment variables */
const port = process.env.PORT_NUMBER

/* Mount middlewares or functions */
app.use(middlewares)
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

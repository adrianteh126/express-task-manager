import express from "express"
import { errorHandler } from "./errorHandler"

const app = express()

app.use(express.json()) // express body parser
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
) // express url encoder
app.use("/", errorHandler)

export default app

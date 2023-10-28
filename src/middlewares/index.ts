import express from "express"
import errorHandler from "./errorHandler"

/* Before route middleware */
const beforeRouteMiddleware = express()
beforeRouteMiddleware.use(express.json()) // express body parser
beforeRouteMiddleware.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
) // express url encoder
beforeRouteMiddleware.use(errorHandler) // custom error handler

/* After route middleware */
// TODO : add after route middleware for eror handling

export { beforeRouteMiddleware }

import { RequestHandler } from "express"

const notFoundHandler: RequestHandler = async (request, response) => {
  response.status(404).send("404 Not Found.")
  console.log("404 Not Found.")
}

export default notFoundHandler

/* eslint-disable */

import { ErrorRequestHandler } from "express"
import _ from "lodash"

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  let _error = error
  if (_.get(error, "cause.cause")) _error = _.get(error, "cause.cause")
  else if (_.get(error, "cause")) _error = _.get(error, "cause")
  else if (_.get(error, "message")) _error = _.get(error, "message")

  response.status(500).send(_error)
}

export default errorHandler

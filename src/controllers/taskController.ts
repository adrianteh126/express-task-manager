import { RequestHandler } from "express"

import TaskDatabase from "../databases/taskDatabase"

const taskDatabase = new TaskDatabase()

export const getAllTask: RequestHandler = async (request, response) => {
  // TODO: not working, fix me later
  const result = await taskDatabase.getCollection({}, {})
  return response.status(200).send(result)
}

export const getTask: RequestHandler = async (request, response) => {
  // TODO:
  const result = {}
  return response.status(200).send(result)
}

export const createTask: RequestHandler = async (request, response) => {
  try {
    const payload = request.body
    const result = await taskDatabase.create(payload)
    return response.status(201).send(result)
  } catch (error) {
    console.error(error)
    return response.status(500).send(error)
  }
}

export const updateTask: RequestHandler = async (request, response) => {
  // TODO:
  const result = {}
  return response.status(200).send(result)
}

export const deleteTask: RequestHandler = async (request, response) => {
  // TODO:
  const result = {}
  return response.status(200).send(result)
}

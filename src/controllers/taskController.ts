import { RequestHandler } from "express"

import TaskDatabase from "../databases/taskDatabase"

const taskDatabase = new TaskDatabase()

export const getAllTask: RequestHandler = async (request, response) => {
  try {
    const result = await taskDatabase.getCollection(
      {},
      { created_datetime_utc: -1 }
    )
    return response.status(200).send(result)
  } catch (error) {
    console.log(error)
    return response.status(500).send(error)
  }
}

export const getTask: RequestHandler = async (request, response) => {
  try {
    const { id } = request.params
    const result = await taskDatabase.findOne({ ref_id: id })
    if (result) {
      return response.status(200).send(result)
    } else {
      return response
        .status(200)
        .send({ message: `No task with id ${id} found.` })
    }
  } catch (error) {
    console.log(error)
    return response.status(500).send(error)
  }
}

// name : String, description : String, complete: Boolean
export const createTask: RequestHandler = async (request, response) => {
  try {
    const payload = request.body
    const result = await taskDatabase.create(payload)
    return response.status(201).send(result)
  } catch (error) {
    console.log(error)
    return response.status(500).send(error)
  }
}

export const updateTask: RequestHandler = async (request, response) => {
  try {
    const { id } = request.params
    const payload = request.body
    const result = await taskDatabase.findOneAndUpdate(payload, {
      ref_id: id,
    })
    if (result) {
      return response.status(200).send(result)
    } else {
      return response
        .status(200)
        .send({ message: `No task with id ${id} found.` })
    }
  } catch (error) {
    console.log(error)
    response.status(500).send(error)
  }
}

export const deleteTask: RequestHandler = async (request, response) => {
  try {
    const { id } = request.params
    const result = await taskDatabase.delete({
      ref_id: id,
    })
    if (result) {
      return response.status(200).send(result)
    } else {
      return response
        .status(200)
        .send({ message: `No task with id ${id} found.` })
    }
  } catch (error) {
    console.log(error)
    response.status(500).send(error)
  }
}

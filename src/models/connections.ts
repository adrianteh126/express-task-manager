import mongoose from "mongoose"

const uri = process.env.MONGO_CONNECTION_STRING!

const connectDB = async () => {
  return mongoose
    .connect(uri, {
      dbName: "TaskManagerDB",
    })
    .then(() => {
      console.log("Successfully connected to MongoDB 🍃")
    })
    .catch((err) => {
      console.error(err)
    })
}

export default connectDB

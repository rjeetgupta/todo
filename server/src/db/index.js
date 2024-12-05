import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        console.log(`MongoDB connected HOST !! ${connectionInstance.Connection.host}`)
    } catch (error) {
        console.log("MongoDB connection FAILED", error)
        process.exit(1)
    }
}

export { connectDB }
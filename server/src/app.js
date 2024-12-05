import express from "express"
import cors from "cors"
import { registerUser } from "./controllers/register.controller.js"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json())

// import routes

import userRoute from "./routes/user.routes.js"


// routes declearation
app.use("api/v1/users", userRoute)

export { app }
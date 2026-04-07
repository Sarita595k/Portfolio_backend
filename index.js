import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { connectToDb } from "./config/db.js"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server is running")
})

app.listen(3000, () => {
    connectToDb()
    console.log("server is running on port 3000")
})
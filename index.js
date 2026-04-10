import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import { connectToDb } from "./config/db.js"
import router from "./src/route/detailsRouter.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server is running")
})

app.use('/api', router)

app.listen(5000, () => {
    connectToDb()
    console.log("server is running on port 3000")
})
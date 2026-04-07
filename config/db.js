import mongoose from "mongoose"

export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("db is connected successfully")
    } catch (error) {
        console.log("Error in connecting to db", error)
    }
}
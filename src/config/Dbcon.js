import mongoose from "mongoose"

export const Dbcon=async()=>{
    try {
        await mongoose.connect(process.env.mongo_url)
        console.log("Db connected")

    } catch (error) {
        console.log("Db not connected")
    }
}

Dbcon()
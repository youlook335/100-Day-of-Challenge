import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Users");
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("DB Connection Erro", error)
    }
}
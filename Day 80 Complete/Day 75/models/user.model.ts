import mongoose from "mongoose";



const userschema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    isStudent: Boolean,
})

export const User = mongoose.model("User", userschema,"Employee")
import mongoose from 'mongoose';
import express from 'express';
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI!)
    .then(() => console.log('MonogDB Connected'))
    .catch((err) => console.log("MongoDB connection error:", err))


app.get('/api', (req, res) => {
    res.send("Server is working!");
});


app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

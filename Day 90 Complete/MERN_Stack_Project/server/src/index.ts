import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/', (req, res)=>{
  res.send("Server is Working")
})

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

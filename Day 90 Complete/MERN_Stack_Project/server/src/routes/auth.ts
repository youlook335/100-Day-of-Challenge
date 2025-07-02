import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import user from '../models/User';


const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET!;

// 🟢 Signup
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: 'All fields are required' });

    const existing = await user.findOne({ email });
    if (existing)
      return res.status(409).json({ message: 'User already exists' });

    const newUser = new user({ name, email, password });
    await newUser.save();

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({ message: 'Signup successful', token });
  } catch (error) {
    return res.status(500).json({ message: 'Signup Error' });
  }
});

export default router;

import express, { Request, Response } from 'express';
import user from '../models/User';
import Log_User from '../models/Log_User';


const router = express.Router();

// 🟢 Signup
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: 'All fields are required' });

    const existing = await user.findOne({ email, password });
    if (existing)
      return res.status(409).json({ message: 'User already exists' });

    const newUser = new user({ name, email, password });
    await newUser.save();


    return res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    return res.status(401).json({ message: 'Signup failed PLease Move a /dashboard' });
  }
});


// 🟢 Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // ✅ Field check
    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required' });

    // ✅ Save new login entry in DB
    const newLogin = new Log_User({ email, password });
    await newLogin.save();


    return res.status(200).json({ message: 'Login successful', });
  } catch (error) {
    console.error('Login Error:', error);
    return res.status(401).json({ message: 'Login failed' });
  }
});

export default router;

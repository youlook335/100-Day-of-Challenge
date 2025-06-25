import express, { Request, Response } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const user = {
  email: "abc@gmail.com",
  password: 123456,
  name: "Hassan"
};

const JWT_SECRET = "my_super_secret_key";

app.get('/', (req: Request, res: Response) => {
  res.send('JWT Auth Backend is Ready');
});

app.post("/api/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    const token = jwt.sign({ email, name: user.name }, JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ message: "Login Successful", token });
  }
  return res.status(401).json({ message: "Invalid Credentials" });
});

app.get('/api/secret', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token Missing or Invalid Format" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    return res.json({ message: "Protected data", user: verified });
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

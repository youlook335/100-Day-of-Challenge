import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const user = {
  email: "abc@gmail.com",
  password: "123456",
  name: "Hassan"
};

const JWT_SECRET = 'my_super_secret_key';

app.get('/', (req, res) => {
  res.send("JWT Auth Backend is Ready");
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    const token = jwt.sign({ email, name: user.name }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ message: "Login Successful", token });
  }

  return res.status(401).json({ message: "Invalid Credentials" });
});

app.get('/api/secret', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    return res.json({ message: "Protected data", user: verified });
  } catch (error) {
    return res.status(401).json({ message: "Token Missing or Invalid Format" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

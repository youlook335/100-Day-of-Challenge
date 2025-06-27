import express from "express";
import { session, users } from "./user";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server Home Page")
})


app.post('/register', (req, res) => {
    const { email, password } = req.body;
    const exists = users.find((u) => u.email === email);
    if (exists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push({ email, password });
    res.status(201).json({ message: "User registered successfully" });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    session.loggedIn = true;
    res.json({ message: 'Login successful' });
});

app.get('/secret', (req, res) => {
    if (!session.loggedIn) {
        return res.status(401).json({ message: "Access Denied" });
    }
    res.json({ message: "This is protected data!" });
});

app.get('/logout', (req, res) => {
    session.loggedIn = false;
    res.json({ message: "You are Logout!" });
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});

import express from 'express';
const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Welcome to REST API in TypeScript");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

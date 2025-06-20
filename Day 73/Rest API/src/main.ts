import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/api/products", (req, res) => {
  const filepath = path.join(__dirname, "data", "products.json");

  fs.readFile(filepath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading products file" })
    }
    const products = JSON.parse(data);
    res.json(products)
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

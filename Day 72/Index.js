// https://chatgpt.com/c/6854e7fa-455c-8011-8d96-b54c3c16c80f
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page.");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at support@example.com");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

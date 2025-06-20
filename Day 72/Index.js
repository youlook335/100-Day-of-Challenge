// https://chatgpt.com/c/6854e7fa-455c-8011-8d96-b54c3c16c80f
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hi this is a Home Page")
});
app.get("/about", (req, res) => {
  res.send("Hi this is a About Page")
});
app.get("/contact", (req, res) => {
  res.send("Hi this is a contact Page")
});
app.get("/help", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} Yes Present`);
    })
  } catch (error) {
    console.log(error);

  }
}
start();
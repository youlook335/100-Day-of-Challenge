// https://chatgpt.com/c/68553c75-2448-8011-bbf3-3cd03513143d

import express from 'express';

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    console.log(`Request Accept ${req.method} ${req.url}`);

    setTimeout(() => {
        console.log("⏳ 2 seconds passed, forwarding to route...");
        next(); // ✅ آگے جاو
    }, 2000);
});
app.get("/", (req, res) => {
    res.send("<h1> Hello is Server is Ready<h1/>")
})

app.get("/about", (req, res) => {
    res.send("Hello This is a about")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})
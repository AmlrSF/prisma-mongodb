import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("HELLO Blud");
});
console.log("cc");
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}.../`);
});

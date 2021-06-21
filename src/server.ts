import express from "express";

const app = express();

app.get("/test", (req, res) => {
    return res.send("salve carai")
});

app.post("/test-post", (req, res) => {
    return res.send("salve NLW #RUMOAOINFINITO")
});

app.listen(3030, () => console.log("Server is runnning"));
import express from "express";
import { auth } from "./newauth.js";

let app = express();

app.get("/user", auth, (req, res) => {
    res.send("Welcome admin");
    console.log("Welcome admin!");
});

app.listen(3000)
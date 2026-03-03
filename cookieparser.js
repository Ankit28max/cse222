import express from "express";
import cookieParser from "cookie-parser";

let app = express();

app.use(cookieParser());

app.get("/setcookie", (req, res) => {
    res.cookie("theme", "dark");
    res.send("Cookie set");
});

app.get('/fetchcookie', (req,res) => {
    res.send(req.cookies.theme)
    console.log(req.cookies);
})

app.get('/removecookie', (req, res) => {
    res.clearCookie("theme")
    res.send("Cookie removed");
})

app.listen(3000)
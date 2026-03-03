//Create an express app that allows users to switch between light and dark themes. The theme prference should be stored using cookie-parsr and the background color of the page should reflect the selected theme.

import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {

    const theme = req.cookies.theme || "light";

    res.send(`
        <body style="
            background:${theme === "dark" ? "black" : "white"};
            color:${theme === "dark" ? "white" : "black"};
            text-align:center;
            padding-top:100px;
        ">
            <h1>Theme Switcher</h1>
            <a href="/set/light"><button>Light</button></a>
            <a href="/set/dark"><button>Dark</button></a>
        </body>
    `);
});

app.get("/set/:mode", (req, res) => {
    res.cookie("theme", req.params.mode);
    res.redirect("/");
});

app.listen(3000);

//fs.exists is a method that checks if a file exists or not. It returns a boolean value.
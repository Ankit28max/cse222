//create an express app that displays simple HTML form asking for username and password. When the 
//form is submitted, the middleware should check if the username and password are admin. 
// If correct display "welcome admin" in terminal and on the browser. If incorrect display
// invalid credentials in the terminal and on the browser.

import express from "express";

let app = express();

const auth = (req, res, next) => {
  if (req.body.username === "admin" && req.body.password === "admin") {
    next();
  } else {
    console.log("Invalid credentials");
    res.send("Invalid credentials");
  }
};

app.use(express.urlencoded({ extended: true }));

app.get('/home', (req, res) => {
    res.send(
        `
        <form action="/submit" method="POST">
            <label for="username">Username</label>
            <input type="text" id="username" name="username">
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
            <button type="submit">Submit</button>
        </form>
        `
    )
})

app.post('/submit', auth, (req, res) => {
    console.log("Welcome admin");
    res.send("Welcome admin");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})``
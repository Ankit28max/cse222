import express from 'express'

let app = express();

app.use(express.urlencoded({ extended: true }));

let auth = (req,res,next) => {
    if (req.body.username === "admin" && req.body.password === "admin") {
        next();
    } else {
        console.log("Invalid credentials");
        res.send("Invalid credentials");
    }
}
 
app.get('/home',(req,res) => {
    res.send(
        `
        <h1>Login Page</h1>
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

app.post('/submit',auth,(req,res) => {
    console.log("Welcome admin");
    res.send("Welcome admin");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
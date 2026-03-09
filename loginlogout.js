import express from 'express'
import session from 'express-session'

let app = express()

app.use(session({
    secret: 'mysession',
    resave: false,
    saveUninitialized: false
}))

app.use(express.urlencoded({ extended: true }))

app.get('/login', (req, res) => {
    res.send(`
        <form action="/dashboard" method="POST">
            <label>Username</label>
            <input type="text" name="username"><br>
            <label>Password</label>
            <input type="password" name="password"><br>
            <input type="submit" value="Login">
        </form>
    `)
})

app.post('/dashboard', (req, res) => {

    let { username, password } = req.body

    if (!username || !password) {
        return res.send(`<h3>Please enter username and password</h3>`)
    }

    req.session.user = { username }

    res.send(`
        <h3>Welcome ${req.session.user.username}</h3>
        <a href="/logout"><button>Logout</button></a>
    `)
})

//get method for dashboard

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.send(`Error destroying session`)
        } else {
            res.redirect('/login')
        }
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
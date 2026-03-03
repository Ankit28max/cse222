import express from "express";
import cookieSession from "cookie-session";

let app = express()

app.use(cookieSession({
    name: 'mynewsession',
    keys: ['key1', 'key2']
}))

app.get('/login',(req,res) => {
    req.session.username = 'Ankit'
    res.redirect('/dashboard')
})

app.get('/dashboard',(req,res) => {
    res.send(`
        <h1>Welcome ${req.session.username}</h1>
        <a href="/logout">Logout</a>
    `)
})
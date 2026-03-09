import express from 'express'
import session from 'express-session'

let app = express()

app.use(session({
    secret: 'mysession',
    resave: false,
    saveUninitialized: false
}))

app.get('/dashboard',(req,res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user.username}. This is your dashboard`)
    } else {
        res.send('You are not logged in')
    }
})

app.get('/login',(req,res) => {
    req.session.user = {username: 'Ankit', email: 'ankit@gmail.com'}
    res.redirect('/dashboard')
})

app.get('/logout',(req,res) => {
    req.session.destroy((err)=>{
        if (err) {
            console.log(`Error in destroying session ${err}`);
        } else {
            console.log("Session destroyed");
            res.redirect('/dashboard');
        }
    }) 
})

app.listen(3000)

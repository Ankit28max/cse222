import express from 'express'
let app = express();

let logger = (req,res,next) => {
    next();
    console.log('Before Logging');
    console.log('After Logging');
}

app.use(logger);

app.get('/home',(req,res)=>{
    console.log("This is home page");
    res.send()
})

app.get('/products',(req,res)=>{
    console.log("This is products page");
    res.send()
})

app.listen(3000)


import express from "express"
import foodroutes from "./foodroutes.js"
let app = express()

app.use(foodroutes)
app.listen(3000)
import http from 'http'
import fs from 'fs'

let server = http.createServer((req,res)=>{
    if (req.url == '/home') {
        res.writeHead(200,{'content-type':'text/html'})
        res.end("<h1 style='color: red;'>This is the Home Page</h1>")
    } else if (req.url == '/about') {
        res.writeHead(200,{'content-type':'text/html'})
        res.end("<h1 style='color: green;'>This is the About Page</h1>")
    } else if (req.url == '/products') {
        fs.readFile('sample.txt',(err,data)=>{
            if (err) {
                console.log(`${err}`);
                    
            } else {
                res.writeHead(200,{'content-type':'text/html'});
                res.write(`<pre style="color: blue;">${data}</pre> <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Image">`)
                res.end();
            }
        })
    } 
    else {
        res.writeHead(404,{'content-type':'text/html'})
        res.end("<h1 style='color: blue;'>Page you're looking for does not exist</h1>")
    }

})

server.listen(3000,()=>{
    console.log("Server is active");  
})
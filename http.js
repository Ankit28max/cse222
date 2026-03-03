import http from 'http'
import fs from 'fs'
let server = http.createServer((req,res)=>{
    // res.writeHead(200,{'content-type':'text/plain'})
    // res.write('<h1 style="color: red">This is the 1st line </h1>')
    fs.readFile('sample.txt',(err,data)=>{
        if (err) {
            console.log(`${err}`);
            
        } else {
            res.writeHead(200,{'content-type':'text/plain'});
            res.write(`${data}`)
            res.end();
        }
    })
})
server.listen(3000,()=>{
    console.log("Server is active");
    
})
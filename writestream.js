import fs, { read, Utf8Stream } from 'fs'

let writeStream = fs.createWriteStream('test.txt', {encoding: 'utf-8'});

writeStream.write("This is the first line.\n");
writeStream.write("This is the second line.\n");
writeStream.write("This is the third line.\n");

writeStream.end(()=>{
    console.log("Data is written");
    let readStream = fs.createReadStream('test.txt','utf-8')
    
    readStream.on('data',(chunk) => {
        console.log(chunk); 
    })
    
});

writeStream.on('finish', () => {
    console.log("File writing completed");
})

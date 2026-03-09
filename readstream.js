import fs from 'fs'


let readStream = fs.createReadStream('test.txt','utf-8');

readStream.on('data', (chunk) => {
    console.log(chunk);
    console.log(`Chunk length: ${chunk.length}`);
})

readStream.on('end', () => {
    console.log("File reading completed");
})

readStream.on('error', (err) => {
    console.log(err);
})
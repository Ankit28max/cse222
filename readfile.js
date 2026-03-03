// import fs from 'fs'

// fs.readFile('sample.txt','utf-8', (err,data)=>{
//     if (err) {
//         console.log(`Error in readig a file ${err}`);
//     } else {
//         console.log(`Contents of the file are ${data}`);
        
//     }
// })

// console.log('hello');

import fs from 'fs'

try {
    let data = fs.readFileSync('sample1.txt'); 
    console.log(`${data}`);
} catch (err) {
    console.log(`${err}`);
}





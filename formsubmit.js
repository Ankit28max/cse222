import express from 'express';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

import { fileURLToPath } from 'url';

let app = express();
let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
})

app.post('/submit', (req, res) => {
    let {username, email} = req.body
    let newUser = {username, email}

    let content = ''
    let r = fs.createReadStream('newdata.json','utf-8')
    r.on('data', (chunk) => {
        content += chunk
    })

    r.on('end', () => {
        let users = []
        if (content.trim() !== '') {
            users = JSON.parse(content)
        }
        users.push(newUser)

        let writeStream = fs.createWriteStream('newdata.json')
        writeStream.write(JSON.stringify(users, null, 3))
        writeStream.end()
        
        let r = fs.createReadStream('newdata.json');
        let w = fs.createWriteStream('newdata.json.gz');
        let gzipStream = zlib.createGzip();

        r.pipe(gzipStream).pipe(w);

        w.end()

    })
    res.send("Form submitted successfully!")

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
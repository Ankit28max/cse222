import express from "express";

let app = express();

app.use(express.static('public'));

app.get('/testcss',(req,res) => {
    res.send(
        `
            <html>
                <head>
                    <link rel="stylesheet" href="style.css">
                </head>
                <body>
                    <h1>Testing CSS</h1>
                </body>
            </html>
        `

    )
})

app.listen(3000);
import http from 'http'
import fs from 'fs'
import { EventEmitter } from 'events'

const fileEvent = new EventEmitter()

fileEvent.on('myFileEvent', (items, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })

    items = JSON.parse(items)

    res.end(`
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            ${items.map(item => `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>   
                    <td>$${item.price}</td>
                </tr>
            `).join('')}
        </table>
    `)
})

let server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(`
            <h3>Click on the button to see the items</h3>
            <a href="/fetch">
                <button type="button">View Data</button>
            </a>
        `)

    } else if (req.url === '/fetch') {

        fs.readFile('items.json', (err, data) => {
            if (err) {
                res.writeHead(404, { 'content-type': 'text/html' })
                res.end('<h3>File not found</h3>')
            } else {
                fileEvent.emit('myFileEvent', data, res)
            }
        })

    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.end('<h3>Page not found</h3>')
    }
})

server.listen(3001, () => {
    console.log("Server is active on port 3001")
})

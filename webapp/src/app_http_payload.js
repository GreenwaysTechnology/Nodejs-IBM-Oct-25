const http = require('http')

const PORT = 3000

//create server and deploy app
const server = http.createServer((req, res) => {
    let data = ''
    req.on('data', (chunk) => {
        data += chunk
    })
    req.on('end', () => {
        //you will have data
        console.log(data)
        res.end('Data has been submitted')
    })
})
//start server
server.listen(PORT, () => {
    console.log(`Http Server is listening at ${PORT}`)
})
//server events
server.on('request', (req, res) => {
    console.log('Request Recived on', `[${new Date().toISOString()}]`, "URL is", req.url, "method ", req.method)
})
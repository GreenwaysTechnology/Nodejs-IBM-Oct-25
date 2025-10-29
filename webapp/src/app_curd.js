const http = require('node:http')

const PORT = 3000
//create server
const server = http.createServer((req, res) => {
    const { method, url } = req
    if (method === 'GET') {
        res.end('GET')
    } else if (method === 'POST') {
        res.end('POST')
    } else if (method === 'PUT') {
        res.end('PUT')
    } else if (method === 'DELETE') {
        console.log('delete is called')
        res.end('DELETE')
    } else {
        res.end('NOT Supported')
    }

})

//start the server
server.listen(PORT, () => {
    console.log(`Http Server is listening at ${PORT}`)
})

//attach server event: request event
server.on('request', (req, res) => {
    console.log('Request Recived on', `[${new Date().toISOString()}]`, "URL is", req.url, "method ", req.method)

})

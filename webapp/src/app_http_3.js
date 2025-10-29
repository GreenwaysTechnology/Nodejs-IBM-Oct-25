const http = require('http')

const PORT = 3000

//create server and deploy app
const server = http.createServer((req, res) => {
    const users = [{
        id: 1,
        name: 'admin'
    }, {
        id: 2,
        name: 'guest'
    }]
    const usersJson = JSON.stringify(users)
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Keep-Alive': 'timeout=10'
    });
    res.end(usersJson)
})
//increase server timeout
server.keepAliveTimeout = 10000 //10 secs
//start server
server.listen(PORT, () => {
    console.log(`Http Server is listening at ${PORT}`)
})
//server events
server.on('request', (req, res) => {
    console.log('Request Recived on', `[${new Date().toISOString()}]`, "URL is", req.url, "method ", req.method)
})
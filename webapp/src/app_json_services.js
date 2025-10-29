const http = require('http')
const { findAll } = require('./services/todo.service')

const PORT = 3000

//create server and deploy app
const server = http.createServer(async (req, res) => {
    try {
        const todos = await findAll()
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Connection': 'keep-alive',
            'Keep-Alive': 'timeout=10'
        });
        const todosJson = JSON.stringify(todos)
        res.end(todosJson)
    }
    catch (err) {
        console.log(err)
        const errJson = JSON.stringify({ err: err })
        res.writeHead(500, {
            'Content-Type': 'application/json',
            'Connection': 'keep-alive',
            'Keep-Alive': 'timeout=10'
        });
        res.end(errJson)
    }
})
//start server
server.listen(PORT, () => {
    console.log(`Http Server is listening at ${PORT}`)
})
//server events
server.on('request', (req, res) => {
    console.log('Request Recived on', `[${new Date().toISOString()}]`, "URL is", req.url, "method ", req.method)
})
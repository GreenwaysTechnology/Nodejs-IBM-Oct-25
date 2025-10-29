const http = require('http')

const PORT = 3000

//create server and deploy app
const server = http.createServer((req, res) => { 
    res.write('Hello')
    res.end()
})
//start server
server.listen(PORT,()=>{
    console.log(`Http Server is listening at ${PORT}`)
})
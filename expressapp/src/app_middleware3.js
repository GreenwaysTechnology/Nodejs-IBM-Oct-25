const express = require('express')
const app = express()

const PORT = 3000

//global middleware
app.use((req, res, next) => {
    res.set("message", "Hello")
    next()
})

app.get('/api/hello', (req, res) => {
    res.end('hello')
})
app.post('/api/hello', (req, res) => {
    res.end('hello')
})
app.get('/api/welcome',(req,res)=>{
    res.end('welcome')
})
//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is ready! at ${server.address().port}`)
})
//server properties

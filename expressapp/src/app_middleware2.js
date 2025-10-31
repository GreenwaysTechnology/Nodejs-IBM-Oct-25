const express = require('express')
const app = express()

const PORT = 3000
//simple middleware
// app.use((req, res, next) => {
//     console.log('Request URL ', req.originalUrl)
//     next()
// })
// app.use((req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
// })
app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
}, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
})





app.get('/api/hello', (req, res) => {
    res.end('hello')
})

//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is ready! at ${server.address().port}`)
})
//server properties

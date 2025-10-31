const express = require('express')
const app = express()

const PORT = 3000
//simple middleware
app.use((req, res, next) => {
    //does some pre processing
    console.log('middleware 1')
    next()
})
app.use((req, res, next) => {
    //does some pre processing
    console.log('middleware 2')
    next()
})
app.use((req, res, next) => {
    //does some pre processing
    console.log('middleware 3')
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

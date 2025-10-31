const express = require('express')
const app = express()

const PORT = 3000
//configure routers
// app.use('/api/books', require('./routers/books/router'))
//since books folder, file name is index.js  which is resolved by default
app.use('/api/books', require('./routers/books'))
// app.use('/api/students', require('./routers/students/router'))
app.use('/api/students', require('./routers/students'))

// app.use('/api/students')
//apis
app.get('/', (req, res) => {
    res.end('Welcome to App!')
})

///Students Api
app.get('/api/students', (req, res) => {
    res.end('students')
})
//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is ready! at ${server.address().port}`)
})
//server properties

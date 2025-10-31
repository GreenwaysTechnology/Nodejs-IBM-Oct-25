const express = require('express')
const app = express()
const morgan = require('morgan')
const fs = require('node:fs')
const path = require('node:path')

const PORT = 3000

app.use(morgan('dev'))

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))


app.use('/api/books', require('./routers/books'))
app.use('/api/students', require('./routers/students'))


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

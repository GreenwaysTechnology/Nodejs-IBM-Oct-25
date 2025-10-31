const express = require('express')
const PORT = 3000
const app = express()
const fs = require('node:fs')
const path = require('node:path')

function fileLoggerMiddleware(req, res, next) {
    const logFormat = `[${new Date().toISOString()}] - ${req.method} - ${req.url}\n`
    fs.appendFileSync(path.join(__dirname, 'access.log'), logFormat)
    next()
}
app.use(fileLoggerMiddleware)

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/api/hello', (req, res) => {
    res.send('Hello')
})
app.get('/api/users', (req, res) => {
    res.send('Users')
})
app.post('/api/products', (req, res) => {
    res.send('products')
})
//start server
app.listen(PORT, () => {
    console.log(`Express server is Running at ${PORT}`)
})

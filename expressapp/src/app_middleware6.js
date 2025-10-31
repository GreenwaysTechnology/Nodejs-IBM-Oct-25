const express = require('express')
const app = express()

const PORT = 3000

//paramized middleware
const middleware = function (param) {
    return function (req, res, next) {
        //do process with parameter
        console.log('Got Middleware',param)
        next()
    }
}
app.use(middleware('param'))

app.get('/api/hello', (req, res, next) => {
    res.set("message", "Hello")
    next()
})

app.get('/api/hello', (req, res) => {
    res.end('hello')
})
const server = app.listen(PORT, () => {
    console.log(`Express server is ready! at ${server.address().port}`)
})
//server properties

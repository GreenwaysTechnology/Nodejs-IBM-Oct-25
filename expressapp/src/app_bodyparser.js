const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = 3000

app.use(bodyParser.json())


// app.post('/api/user', (req, res) => {
//     let = data = ''
//     req.on('data', (chunk) => {
//         data += chunk
//     })
//     req.on('end', () => {
//         console.log(data)
//         console.log(JSON.parse(data))
//         res.end('saved')
//     })
// })


app.post('/api/user', (req, res) => {
    const data = req.body 
    console.log(data)
    res.end('saved')
})

app.get('/', (req, res) => {
    res.end('Welcome to App!')
})


//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is ready! at ${server.address().port}`)
})
//server properties

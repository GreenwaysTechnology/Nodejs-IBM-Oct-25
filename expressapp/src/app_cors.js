const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())

app.get('/products/:id', (req, res) => {
    res.json({ id: 1, name: 'Product1' })
})

app.post('/products/:id', cors({
    origin: 'http://127.0.0.1:5500',
    methods:"GET"
}), (req, res) => {
    res.json({ id: 1, name: 'Products Post' })
})
app.get('/customers/:id', cors({
    origin: 'http://example.com'
}), (req, res) => {
    res.json({ id: 1, name: 'Customer1' })
})

//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is ready! at ${server.address().port}`)
})
//server properties

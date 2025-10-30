const express = require('express')
const app = express()

const PORT = 3001

//mock data 
const books = [
    {
        id: 1, title: 'Node.js Design Patterns', author: 'Mario Casciaro', year: '2014'
    },
    {
        id: 1, title: 'Beginning Node.js, Express & MongoDB Development', author: 'GREG. LIM', year: '2019'
    }
]
//apis
app.get('/', (req, res) => {
    res.end('Welcome to App!')
})
//books api
app.get('/api/books', (req, res) => {
    res.json(books)
})
app.post('/api/books', (req, res) => {
    res.json({ message: 'books post api still in progress' })
})
app.put('/api/books', (req, res) => {
    res.json({ message: 'books put api still in progress' })
})
app.delete('/api/books', (req, res) => {
    res.json({ message: 'books delete api still in progress' })
})
//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is ready! at ${server.address().port}`)
})
//server properties

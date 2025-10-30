const express = require('express')
const app = express()
const { findAll, save } = require('./services/books.service')

const PORT = 3000

//apis
app.get('/', (req, res) => {
    res.end('Welcome to App!')
})
//books api
app.get('/api/books', async (req, res) => {
    const books = await findAll()
    console.log(books)
    res.json(books)
})
app.post('/api/books', (req, res) => {
    let book = ''
    req.on('data', (chunk) => {
        book += chunk
    })
    req.on('end', async () => {
        const newBook = await save(book)
        res.status(201).json(newBook)
    })
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

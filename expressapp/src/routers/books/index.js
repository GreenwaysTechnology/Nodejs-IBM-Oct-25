const express = require('express')
const booksRouter = express.Router()
const { findAll, save } = require('../../services/books.service')

//api
booksRouter.get('/', async (req, res) => {
    const books = await findAll()
    console.log(books)
    res.json(books)
})
booksRouter.post('/', (req, res) => {
    let book = ''
    req.on('data', (chunk) => {
        book += chunk
    })
    req.on('end', async () => {
        const newBook = await save(book)
        res.status(201).json(newBook)
    })
})
booksRouter.put('/', (req, res) => {
    res.json({ message: 'books put api still in progress' })
})
booksRouter.delete('/', (req, res) => {
    res.json({ message: 'books delete api still in progress' })
})


module.exports = booksRouter
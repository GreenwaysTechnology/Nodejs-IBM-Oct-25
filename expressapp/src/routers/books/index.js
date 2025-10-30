const express = require('express')
const booksRouter = express.Router()
const { findAll, save, findById, filterByAuthor, update, remove } = require('../../services/books.service')

const books = [
    {
        id: 1, title: 'Node.js Design Patterns', author: 'Mario Casciaro', year: '2014'
    },
    {
        id: 2, title: 'Beginning Node.js, Express & MongoDB Development', author: 'GREG. LIM', year: '2019'
    }
]
//api
booksRouter.get('/', async (req, res) => {
    const books = await findAll()
    console.log(books)
    res.json(books)
})
//api/books/filter?author;
booksRouter.get('/filter', async (req, res) => {
    const { author } = req.query
    const result = await filterByAuthor(author)
    res.json(result)
})

//path parameter
booksRouter.get('/:id', async (req, res) => {
    const id = +req.params.id
    const book = await findById(id)
    if (!book) {
        res.status(404).json({ message: `Book id ${id} not found` })
    }
    res.json(book)
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
booksRouter.put('/:id', async (req, res) => {
    let data = ''
    req.on('data', (chunk) => {
        data += chunk
    })
    req.on('end', async () => {
        const id = +req.params.id
        let parsedBook = JSON.parse(data)
        const updatedBook = await update(id, parsedBook)
        if (!updatedBook) {
            res.status(404).json({ error: 'book Not Found' })
        }
        res.json(updatedBook)
    })


})
booksRouter.delete('/:id', async (req, res) => {
    const id = +req.params.id
    const response = await remove(id)
    if (response.length === 0) {
        res.json({ message: "Book not deleted" })
    }
    res.json({ message: 'Book has been deleted succfully' })
})


module.exports = booksRouter
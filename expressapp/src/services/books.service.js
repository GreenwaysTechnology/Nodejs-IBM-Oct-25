
//mock data 
const books = [
    {
        id: 1, title: 'Node.js Design Patterns', author: 'Mario Casciaro', year: '2014'
    },
    {
        id: 2, title: 'Beginning Node.js, Express & MongoDB Development', author: 'GREG. LIM', year: '2019'
    }
]
class BookService {

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, books)
        })
    }
    async save(book) {
        const tmpbook = JSON.parse(book)
        const newBook = {
            id: books.length + 1,
            title: tmpbook.title,
            author: tmpbook.author,
            year: tmpbook.year
        }
        books.push(newBook)
        //return Promise.resolve(newBook)
        return newBook
    }
    async findById(id) {
        const book = books.find(tmpBook => tmpBook.id === id)
        return book
    }
    async filterByAuthor(author) {
        let result = [...books]
        if (author) {
            result = result.filter(b => b.author.toLowerCase().includes(author.toLowerCase()))
        }
        return result
    }
    async update(id, parsedBook) {
        const book = books.find(b => b.id === id)
        if (!book) {
            return null
        }
        //update
        book.author = parsedBook.author
        book.title = parsedBook.title
        return book
    }
    async remove(id) {
        return books.filter(b => b.id === id)
    }


}
module.exports = new BookService()
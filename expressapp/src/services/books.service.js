
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
}
module.exports = new BookService()
class TodoService {

    async findAll() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        return response.json()
    }
}
module.exports = new TodoService()
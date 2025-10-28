class TodoService {
    findAll() {
        return [{ id: 1, status: false, text: 'learn node' }]
    }
}
//return class directly
//module.exports = TodoService
//return instance of TodoService
module.exports = new TodoService()

function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login is success')
    } else {
        return Promise.reject('Login is failed')
    }
}


function main() {
    blockMe('start')
    login('admin','admin').then(status=>console.log(status)).catch(res => console.log(res))
    blockMe('end')
}
main()
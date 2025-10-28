
function blockMe(message) {
    console.log(message)
}
function getPromise() {
    return Promise.resolve('hello')
}


function main() {
    blockMe('start')
    getPromise().then(res=>console.log(res))
    blockMe('end')
}
main()
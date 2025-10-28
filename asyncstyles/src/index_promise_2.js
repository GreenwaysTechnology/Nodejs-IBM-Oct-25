
function blockMe(message) {
    console.log(message)
}
function getPromise() {
    return Promise.reject('something went wrong')
}


function main() {
    blockMe('start')
    getPromise().catch(res=>console.log(res))
    blockMe('end')
}
main()
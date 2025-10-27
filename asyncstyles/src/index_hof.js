function blockMe(message) {
    console.log(message)
}
function greet(cb) {
    cb()
}
function main() {
    blockMe('start')
    //higer order function
    greet(function () {
        console.log('greet')
    })
    blockMe('end')
}
main()
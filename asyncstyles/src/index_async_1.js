function blockMe(message) {
    console.log(message)
}
function greet(cb) {
    //schdule cb in delayed manner-async manner
    setTimeout(cb, 5000)
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
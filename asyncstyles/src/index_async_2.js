function blockMe(message) {
    console.log(message)
}
function greet(cb) {
    //schdule cb in delayed manner-async manner
    setTimeout(cb, 5000, 'welcome')
}
function main() {
    blockMe('start')
    //higer order function
    greet((data) => {
        console.log(data)
    })
    blockMe('end')
}
main()
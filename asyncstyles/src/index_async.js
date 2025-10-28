// function getValue() {
//     return Promise.resolve(10)
// }
async function getValue() {
    return 10 // return Promise.resolve(10)
}
function main() {
    getValue().then(value => console.log(value))
}
main()
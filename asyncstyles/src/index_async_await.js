
// function getValue() {
//     return Promise.resolve(10)
// }
async function getValue() {
    return 10 // return Promise.resolve(10)
}
async function main() {
    const value = await getValue()
    console.log(value)
}
main()
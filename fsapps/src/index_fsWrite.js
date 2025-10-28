const fs = require('node:fs')

function createNewFile() {
    const filePath = './src/assets/demo.txt'
    const content = 'This is sample demo'
    fs.writeFile(filePath, content, (err) => {
        if (err) throw err
        console.log(`File "${filePath}" created`)
    })
}
function main() {
    createNewFile()
}
main()
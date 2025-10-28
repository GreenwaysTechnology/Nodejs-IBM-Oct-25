const fs = require('node:fs')
//callback based
// function readTextFile() {
//     const filePath = './src/assets/info.txt'
//     const options = {
//         encoding: 'UTF-8'
//     }
//     fs.readFile(filePath, options, (err, data) => {
//         if (err) throw err
//         console.log(data)
//     })
// }
function readTextFile() {
    return new Promise((resolve, reject) => {
        const filePath = './src/assets/info.txt'
        const options = {
            encoding: 'UTF-8'
        }
        fs.readFile(filePath, options, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
async function main() {
    //  readTextFile().then(data=>console.log(data)).catch(err=>console.log(err))
    try {
        const data = await readTextFile()
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}
main()
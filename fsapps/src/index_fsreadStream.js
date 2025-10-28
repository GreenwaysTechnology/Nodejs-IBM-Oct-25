const fs = require('node:fs')
const path = require('node:path')


function readTextFile() {
    const filePath = path.join(__dirname, 'assets/info.txt')
    const options = {
        encoding: 'UTF-8'
    }
    const inputstream = fs.createReadStream(filePath, options)

    //register events for reading data
    let data=''
    inputstream.on('data', (chunk) => {
        console.log('data event is called')
        data+=chunk
    })
    inputstream.on('end', () => {
        console.log('there is no more')
        console.log(data)
    })
    inputstream.on('close', () => {
        console.log('close ')
    })
    inputstream.on('error', (err) => {
        console.log(err)
    })
}
function main() {
    readTextFile()
}
main()
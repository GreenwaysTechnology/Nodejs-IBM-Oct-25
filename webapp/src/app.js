const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    if (req.method === "POST") {
        const fileStream = fs.createWriteStream('uploaded_file.txt');
        //inputstream.pipe(outputstream)
        req.pipe(fileStream); // Pipe the request data into the file
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File saved successfully!');
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Only POST method is supported');
    }

})

server.listen(3000, () => {
    console.log('Server is up and running!')
});

server.on('request', (req, res) => {
    console.log('Request Recived on', new Date(), "URL is", req.url, "method ", req.method)
})
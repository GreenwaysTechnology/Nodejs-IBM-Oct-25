const express = require('express')
const app = express()

const PORT = 3000

app.get('/api/user/:name', (req, res) => {
    const name = req.params.name
    if (name === 'admin') {
        res.send({ message: 'Welcome to Admin' })
    } else {
        throw new Error('User Is not valid')
    }
})

//404 Route not found error handler
//this must be placed before Global error handler
//it wont take next arg, because it terminates the request and response
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `The route ${req.originalUrl} not Found`,
    });
});
//Error Handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        success: false,
        message: err.message
    });
})





//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is ready! at ${server.address().port}`)
})
//server properties

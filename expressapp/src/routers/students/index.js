const express = require('express')
const studentsRouter = express.Router()

studentsRouter.get('/', (req, res) => {
    res.end('students')
})


module.exports = studentsRouter
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())
app.use('/api/posts', require('./routers/post'))

//connect to mongodb
async function connectDb() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Database is succfully connected')
    }
    catch (err) {
        console.log(err)
    }
}
connectDb()


const server = app.listen(PORT, () => {
    console.log(`Express Server is Running @ ${server.address().port}`)
})



const mongoose = require('mongoose')

//define schema
const postSchema = mongoose.Schema({
    title: String,
    content: String
})
//create model out of schema
module.exports = mongoose.model('Post', postSchema)
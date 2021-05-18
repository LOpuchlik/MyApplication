const mongoose = require('mongoose')

// Create a schema object
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
// this is a table in my database
module.exports = mongoose.model('Author', authorSchema)
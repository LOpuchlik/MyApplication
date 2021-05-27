const mongoose = require('mongoose')
const Book = require('./book')

// Create a schema object
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

authorSchema.pre('remove', function(next) {
    Book.find({ author: this.id}, (err, books) => {
        if (err) {
            next(err)
        } else  if (books.length > 0) {
            next(new Error('There are other books by this author, you cannot delete it'))
        } else {
            next()
        }
    })
})
// this is a table in my database
module.exports = mongoose.model('Author', authorSchema)
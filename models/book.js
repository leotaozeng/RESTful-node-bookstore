const mongoose = require('mongoose')
const { Schema } = mongoose

// create a book schema
let bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  gnere: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  pages: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  buy_url: {
    type: String,
    required: true
  }
})

const Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBooks = (callback, limit) => {
  Book.find(callback).limit(limit)
}
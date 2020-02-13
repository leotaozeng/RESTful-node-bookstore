const mongoose = require('mongoose')
const { Schema } = mongoose

const getBooks = async () => {
  const books = await Book.find()

  if (!books) {
    throw (new Error('Something went wrong'))
  } else {
    return books
  }
}

const getBookById = async (bookId) => {
  const book = await Book.findById({
    _id: bookId
  })

  if (!book) {
    throw (new Error('Something went wrong'))
  } else {
    return book
  }
}

// create a book schema
const bookSchema = new Schema({
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

module.exports.getBooks = getBooks
module.exports.getBookById = getBookById
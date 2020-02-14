const mongoose = require('mongoose')
const { Schema } = mongoose

// Get Books
const getBooks = async () => {
  const books = await Book.find()

  if (!books) {
    throw (new Error('Something went wrong'))
  } else {
    return books
  }
}

// Get Book 
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

// Add Book
const addBook = (book, callback) => {
  Book
    .create(book)
    .then(doc => callback(doc))
    .catch(err => {
      throw (new Error(err))
    })
}

// create a book schema
const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
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
module.exports.addBook = addBook
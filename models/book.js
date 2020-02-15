const mongoose = require('mongoose')
const { Schema } = mongoose

// Define a schema
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

// Get Books => GET
const getBooks = (callback) => {
  Book
    .find()
    .then(doc => callback(doc))
    .catch(err => {
      throw new Error(`Books NOT_FOUND: ${err}`)
    })
}

// Get Book => GET
const getBookById = (bookId, callback) => {
  Book
    .findById(bookId)
    .then(doc => callback(doc))
    .catch(err => {
      throw new Error(`Book NOT_FOUND with id: ${err}`)
    })
}

// Create Book => POST
const createBook = (book, callback) => {
  Book
    .create(book)
    .then(doc => callback(doc))
    .catch(err => {
      throw new Error(err)
    })
}

// Update Book => PUT
const updateBookById = (bookId, book, callback) => {
  Book
    .findByIdAndUpdate(
      bookId,
      book,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false
      },
      callback
    )
    .then(doc => callback(doc))
    .catch(err => console.error(err.message))
}

// Delete Book => DELETE
const deleteBookById = (bookId, callback) => {
  Book
    .findByIdAndRemove(
      bookId,
      {
        useFindAndModify: false
      }
    )
    .then((doc) => callback(doc))
    .catch(err => {
      throw new Error(`Book NOT_FOUND with id: ${bookId} ${err}`)
    })
}

const Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBooks = getBooks
module.exports.getBookById = getBookById
module.exports.createBook = createBook
module.exports.updateBookById = updateBookById
module.exports.deleteBookById = deleteBookById
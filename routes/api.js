const express = require('express')
const router = express.Router()

const Genre = require('../models/genre')
const Book = require('../models/book')

router.get('/genres', (req, res) => {
  Genre.getGenres((err, genres) => {
    if (err) {
      console.log(`Error during find documents: ${err}`)
    }

    res.json(genres)
  })
})

router.get('/books', async (req, res) => {
  const books = await Book.getBooks()
  
  res.json(books)
})

router.get('/books/:bookId', async (req, res) => {
  const { bookId } = req.params
  const book = await Book.getBookById(bookId)

  res.json(book)
})

module.exports = router
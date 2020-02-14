const express = require('express')
const router = express.Router()

const Genre = require('../models/genre')
const Book = require('../models/book')

router.get('/genres', (req, res) => {
  Genre.getGenres((err, genres) => {
    if (!err) {
      res.json(genres)
    }
  })
})

router.post('/genres', async (req, res) => {
  const genre = req.body
  const newGenre = await Genre.addGenre(genre)

  res.json(newGenre)
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

router.post('/books', async (req, res) => {
  const book = req.body

  Book.addBook(book, newBook => {
    res.json(newBook)
  })
})

module.exports = router
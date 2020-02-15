const express = require('express')
const router = express.Router()

const GenreModel = require('../models/genre')
const BookModel = require('../models/book')

router.get('/genres', (req, res) => {
  GenreModel.getGenres(genres => res.json(genres))
})

router.get('/genres/:genreId', (req, res) => {
  const { genreId } = req.params

  GenreModel.getGenreById(genreId, genre => res.json(genre))
})

router.post('/genres', (req, res) => {
  GenreModel.createGenre(req.body, newGenre => res.json(newGenre))
})

router.put('/genres/:genreId', (req, res) => {
  const { genreId } = req.params

  GenreModel.updateGenreById(genreId, req.body, updatedGenre => res.json(updatedGenre))
})

router.delete('/genres/:genreId', (req, res) => {
  const { genreId } = req.params

  Genre.deleteGenreById(genreId, deletedGenre => res.json(deletedGenre))
})

router.get('/books', (req, res) => {
  BookModel.getBooks((books) => res.json(books))
})

router.get('/books/:bookId', (req, res) => {
  const { bookId } = req.params

  BookModel.getBookById(bookId, book => res.json(book))
})

router.post('/books', (req, res) => {
  BookModel.createBook(req.body, newBook => res.json(newBook))
})

router.put('/books/:bookId', (req, res) => {
  const { bookId } = req.params

  BookModel.updateBookById(bookId, req.body, updatedBook => res.json(updatedBook))
})

router.delete('/books/:bookId', (req, res) => {
  const { bookId } = req.params

  BookModel.deleteBookById(bookId, deletedBook => res.json(deletedBook))
})

module.exports = router
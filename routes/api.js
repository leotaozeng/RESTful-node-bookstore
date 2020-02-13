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

router.get('/books', (req, res) => {
  Book.getBooks((err, genres) => {
    if (err) {
      console.log(`Error during find documents: ${err}`)
    }

    res.json(genres)
  })
})

module.exports = router
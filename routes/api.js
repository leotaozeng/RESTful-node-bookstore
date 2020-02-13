const express = require('express')
const router = express.Router()

const Genre = require('../models/genre')

router.get('/genres', (req, res) => {
  Genre.getGenres((err, genres) => {
    if (err) {
      console.log(`Error during find documents: ${err}`)
    }

    res.json(genres)
  })
})

module.exports = router
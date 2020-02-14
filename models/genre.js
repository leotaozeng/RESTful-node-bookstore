const mongoose = require('mongoose')
const { Schema } = mongoose

// Add Genre
const addGenre = async (genre) => {
  const result = await Genre.create(genre)

  if (!result) {
    throw (new Error('Something went wrong'))
  } else {
    return result
  }
}

// Create a genre schema
let genreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

const Genre = module.exports = mongoose.model('Genre', genreSchema)

module.exports.getGenres = (callback, limit) => {
  Genre.find(callback).limit(limit)
}

module.exports.addGenre = addGenre
const mongoose = require('mongoose')
const { Schema } = mongoose

// Define a schema
const genreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

// Get Genres => GET
const getGenres = (callback) => {
  Genre
    .find()
    .then(doc => callback(doc))
    .catch(err => {
      throw new Error(`Genres NOT_FOUND: ${err}`)
    })
}

// Get Genre => GET
const getGenreById = (genreId, callback) => {
  Genre
    .findById(genreId)
    .then(doc => callback(doc))
    .catch(err => {
      throw new Error(`Genre NOT_FOUND with id: ${err}`)
    })
}

// Create Genre => POST
const createGenre = (genre, callback) => {
  const newGenreObj = new Genre(genre)

  newGenreObj
    .save()
    .then(doc => callback(doc))
    .catch(err => {
      throw new Error(`New Genre NOT_FOUND: ${err}`)
    })
}

// Update Genre => PUT
const updateGenreById = (genreId, genre, callback) => {
  Genre
    .findByIdAndUpdate(
      genreId,
      genre,
      {
        new: true,                       // return updated doc
        runValidators: true,             // validate before update
        useFindAndModify: false
      })
    .then(doc => callback(doc))
    .catch(err => {
      throw new Error(`Genre NOT_FOUND with id: ${genreId} ${err}`)
    })
}

// Delete Genre => DELETE
const deleteGenreById = (genreId, callback) => {
  Genre
    .findByIdAndRemove(
      genreId,
      {
        useFindAndModify: false
      }
    )
    .then((doc) => callback(doc))
    .catch(err => {
      throw new Error(`Genre NOT_FOUND with id: ${genreId} ${err}`)
    })
}

const Genre = module.exports = mongoose.model('Genre', genreSchema)

module.exports.getGenres = getGenres
module.exports.getGenreById = getGenreById
module.exports.createGenre = createGenre
module.exports.updateGenreById = updateGenreById
module.exports.deleteGenreById = deleteGenreById
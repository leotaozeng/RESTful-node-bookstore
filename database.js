const mongoose = require('mongoose')

const server = 'Alex:db19950723@cluster0-taqum.mongodb.net'
const database = 'bookstore'

class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.connect(`mongodb+srv://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
      })
  }
}

module.exports = new Database()
const express = require('express')

require('./database')

const app = express()
const port = 3000

const apiRouter = require('./routes/api')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', apiRouter)

app.get('/', (req, res) => res.send('Please use /api/books or /api/genres'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
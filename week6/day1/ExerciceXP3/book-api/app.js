const express = require('express')
const app = express()
const booksRouter = require('./routes/books')

app.use(express.json())
app.use('/books', booksRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(` Book API running at http://localhost:${PORT}`)
})

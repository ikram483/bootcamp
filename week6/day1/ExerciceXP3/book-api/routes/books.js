// routes/books.js
const express = require('express')
const router = express.Router()

let books = []
let id = 1

// GET all books
router.get('/', (req, res) => {
  res.json(books)
})

// POST a new book
router.post('/', (req, res) => {
  const { title, author } = req.body
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' })
  }

  const newBook = { id: id++, title, author }
  books.push(newBook)
  res.status(201).json(newBook)
})

// PUT update a book by ID
router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id)
  const { title, author } = req.body
  const book = books.find(b => b.id === bookId)

  if (!book) {
    return res.status(404).json({ error: 'Book not found' })
  }

  if (title) book.title = title
  if (author) book.author = author

  res.json(book)
})

// DELETE a book by ID
router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id)
  const initialLength = books.length
  books = books.filter(b => b.id !== bookId)

  if (books.length === initialLength) {
    return res.status(404).json({ error: 'Book not found' })
  }

  res.json({ message: 'Book deleted successfully' })
})

module.exports = router

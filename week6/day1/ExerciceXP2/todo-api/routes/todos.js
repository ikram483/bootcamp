const express = require('express')
const router = express.Router()

let todos = []
let id = 1

// GET all todos
router.get('/', (req, res) => {
  res.json(todos)
})

// POST a new todo
router.post('/', (req, res) => {
  const { title } = req.body
  if (!title) return res.status(400).json({ error: 'Title is required' })

  const newTodo = { id: id++, title }
  todos.push(newTodo)
  res.status(201).json(newTodo)
})

// PUT update a todo by ID
router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id)
  const { title } = req.body
  const todo = todos.find(t => t.id === todoId)

  if (!todo) return res.status(404).json({ error: 'Todo not found' })

  todo.title = title || todo.title
  res.json(todo)
})

// DELETE a todo by ID
router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id)
  todos = todos.filter(t => t.id !== todoId)
  res.json({ message: 'Todo deleted successfully' })
})

module.exports = router

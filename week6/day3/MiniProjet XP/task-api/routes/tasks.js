const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../data/tasks.json');

// Helper to read tasks
const readTasks = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Helper to write tasks
const writeTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

// GET all tasks
router.get('/', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// GET task by ID
router.get('/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
});

// POST create task
router.post('/', (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });

  const tasks = readTasks();
  const newTask = {
    id: Date.now(),
    title,
    completed: completed || false,
  };
  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json(newTask);
});

// PUT update task
router.put('/:id', (req, res) => {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).json({ message: 'Task not found' });

  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });

  tasks[taskIndex] = { ...tasks[taskIndex], title, completed };
  writeTasks(tasks);
  res.json(tasks[taskIndex]);
});

// DELETE task
router.delete('/:id', (req, res) => {
  let tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).json({ message: 'Task not found' });

  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
  writeTasks(tasks);
  res.json({ message: 'Task deleted' });
});

module.exports = router;

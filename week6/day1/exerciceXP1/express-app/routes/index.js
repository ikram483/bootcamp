const express = require('express')
const router = express.Router()

// Route d'accueil
router.get('/', (req, res) => {
  res.send(' Welcome to the Homepage!')
})

// Route About
router.get('/about', (req, res) => {
  res.send('This is the About Us page!')
})

module.exports = router

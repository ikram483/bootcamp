const express = require('express')
const app = express()
const router = require('./routes') // on importe notre routeur

app.use('/', router)

// Démarrer le serveur
const PORT = 3000
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`)
})

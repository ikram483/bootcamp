import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

let players = {}

app.post('/api/guess', (req, res) => {
  const { guess, correctAnswer, playerName } = req.body
  const isCorrect = guess === correctAnswer

  if (!players[playerName]) players[playerName] = 0
  if (isCorrect) players[playerName] += 1

  res.json({ isCorrect, score: players[playerName] })
})


const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static('public'))
app.use(express.json())

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚀', name: 'Rocket' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '👻', name: 'Ghost' }
]

let score = 0

// Route principale qui envoie le fichier HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Route pour obtenir une question
app.get('/api/question', (req, res) => {
  const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)]
  const options = [correctEmoji.name]

  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name
    if (!options.includes(random)) {
      options.push(random)
    }
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5)

  res.json({
    emoji: correctEmoji.emoji,
    correctAnswer: correctEmoji.name,
    options
  })
})

// Vérifie la réponse
app.post('/api/guess', (req, res) => {
  const { guess, correctAnswer } = req.body
  const isCorrect = guess === correctAnswer
  if (isCorrect) score++
  res.json({ isCorrect, score })
})

app.listen(port, () => {
  console.log(`Emoji Game running at http://localhost:${port}`)
})

import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

let posts = [
  { id: 1, title: 'First Post', content: 'This is the first blog post.' },
  { id: 2, title: 'Second Post', content: 'This is the second blog post.' }
]

app.get('/posts', (req, res) => {
  res.json(posts)
})

app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id)
  const post = posts.find(p => p.id === postId)
  if (!post) {
    return res.status(404).json({ error: 'Post not found' })
  }
  res.json(post)
})

app.post('/posts', (req, res) => {
  const { title, content } = req.body
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  }
  posts.push(newPost)
  res.status(201).json(newPost)
})

app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id)
  const { title, content } = req.body
  const post = posts.find(p => p.id === postId)
  if (!post) {
    return res.status(404).json({ error: 'Post not found' })
  }
  post.title = title
  post.content = content
  res.json(post)
})

app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id)
  const index = posts.findIndex(p => p.id === postId)
  if (index === -1) {
    return res.status(404).json({ error: 'Post not found' })
  }
  posts.splice(index, 1)
  res.status(204).send()
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.listen(port, () => {
  console.log(`Blog API is running on http://localhost:${port}`)
})

require('dotenv').config();
const express = require('express');
const app = express();
const postRoutes = require('./routes/post.routes');

app.use(express.json());
app.use('/posts', postRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Blog API listening on http://localhost:${PORT}`)
);

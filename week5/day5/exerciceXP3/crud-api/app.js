import express from 'express';
import { fetchPosts } from './data/dataService.js'; 

console.log("✅ app.js loaded");
const app = express();
app.use(express.json())
const port = 5000;
app.get('/', (req, res) => {
  res.send('Hello, this is the CRUD API server!');
});

app.get('/test', (req, res) => {
    console.log('✅ Test route hit');
    res.send('Test route working!');
  });
  
app.get('/api/posts', async (req, res) => {
    console.log('👉 /api/posts endpoint hit'); // <-- Ajoute ça
    try {
      const posts = await fetchPosts();
      console.log('✅ Data successfully retrieved:', posts.length);
      res.status(200).json(posts);
    } catch (error) {
      console.error('❌ Error fetching data:', error.message);
      res.status(500).json({ message: 'Failed to fetch posts' });
    }
  });  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

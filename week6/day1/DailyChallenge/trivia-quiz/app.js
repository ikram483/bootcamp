const express = require('express');
const app = express();
const quizRoutes = require('./routes/quiz');

app.use(express.json()); 
app.use('/quiz', quizRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🎮 Trivia Quiz Game running at http://localhost:${PORT}`);
});

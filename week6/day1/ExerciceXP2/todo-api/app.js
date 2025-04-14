const express = require('express');
const app = express();
const todosRouter = require('./routes/todos');

app.use(express.json()); 
app.use('/todos', todosRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the To-Do API!');
});

app.listen(3000, () => {
  console.log(' Server running on http://localhost:3000');
});

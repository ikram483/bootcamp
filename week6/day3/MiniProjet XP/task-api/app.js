const express = require('express');
const taskRoutes = require('./routes/tasks');
const app = express();

app.use(express.json());
app.use('/tasks', taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

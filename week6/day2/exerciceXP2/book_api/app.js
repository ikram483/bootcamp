const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./server/routes/book.routes');
const pool = require('./server/config/db');


dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', bookRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});

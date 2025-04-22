const db = require('../config/db');
const bcrypt = require('bcrypt');
    
// Enregistrement
exports.register = async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;
    try {

        const existing = await db('users').where({ username }).orWhere({ email }).first();
        if (existing) {
          return res.status(400).json({ error: 'Username or email already in use' });
        }

      const hashed = await bcrypt.hash(password, 10);
  
      await db('users').insert({ username, email, first_name, last_name });
      await db('hashpwd').insert({ username, password: hashed });
  
      res.status(201).json({ message: 'Utilisateur enregistré ✅' });
    } catch (err) {
      console.error('Erreur register :', err);
      res.status(500).json({ error: 'Erreur lors de l\'enregistrement' });
    }
  };
  
// Connexion
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db('hashpwd').where({ username }).first();
    if (!user) return res.status(400).json({ error: 'Utilisateur non trouvé' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Mot de passe incorrect' });

    res.status(200).json({ message: 'Connexion réussie ✅' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
};

// Obtenir tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await db('users');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
};

// Obtenir un utilisateur par ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db('users').where({ id }).first();
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
};

// Mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, username, first_name, last_name } = req.body;
  try {
    await db('users').where({ id }).update({ email, username, first_name, last_name });
    res.status(200).json({ message: 'Utilisateur mis à jour ✅' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
  }
};

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/tasks.json');

const data = fs.readFileSync(filePath, 'utf-8');
let tasks = JSON.parse(data); // <-- Assure-toi que ça renvoie un tableau

// Exemple : Ajouter une tâche
const newTask = {
  id: Date.now(),
  title: req.body.title,
  completed: false
};

tasks.push(newTask); // Ici, tasks doit être un tableau

fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

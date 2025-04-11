// todo.js

export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(description) {
      const task = {
        id: this.tasks.length + 1,
        description,
        completed: false
      };
      this.tasks.push(task);
      console.log(` Tâche ajoutée : "${description}"`);
    }
  
    markComplete(id) {
      const task = this.tasks.find(t => t.id === id);
      if (task) {
        task.completed = true;
        console.log(` Tâche "${task.description}" marquée comme terminée.`);
      } else {
        console.log(` Tâche avec l'ID ${id} non trouvée.`);
      }
    }
  
    listTasks() {
      console.log('\n Liste des tâches :');
      this.tasks.forEach(task => {
        const status = task.completed ? ' Terminé' : ' En attente';
        console.log(`${task.id}. ${task.description} - ${status}`);
      });
    }
  }
  
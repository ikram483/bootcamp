
import { TodoList } from './todo.js';

const myTodos = new TodoList();

myTodos.addTask('Apprendre Node.js');
myTodos.addTask('Faire les courses');
myTodos.addTask('Lire un livre');

myTodos.markComplete(2);

myTodos.listTasks();

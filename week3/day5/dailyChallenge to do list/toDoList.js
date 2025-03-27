const tasks = [];
let taskId = 0;

const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const taskList = document.querySelector('.listTasks');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const newTask = {
    task_id: taskId++,
    text: text,
    done: false
  };

  tasks.push(newTask);
  displayTask(newTask);

  input.value = "";
});

function displayTask(task) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.setAttribute('data-task-id', task.task_id);

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => toggleDone(task.task_id, taskDiv));

  // Label
  const label = document.createElement('label');
  label.textContent = task.text;

  // Delete button
  const deleteBtn = document.createElement('i');
  deleteBtn.className = 'fas fa-times';
  deleteBtn.style.cursor = 'pointer';
  deleteBtn.style.color = 'red';
  deleteBtn.addEventListener('click', () => deleteTask(task.task_id, taskDiv));

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);
  taskDiv.appendChild(deleteBtn);

  taskList.appendChild(taskDiv);
}

function toggleDone(id, taskDiv) {
  const task = tasks.find(t => t.task_id === id);
  if (task) {
    task.done = !task.done;
    taskDiv.classList.toggle('done', task.done);
  }
}

function deleteTask(id, taskDiv) {
  const index = tasks.findIndex(t => t.task_id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    taskDiv.remove();
  }
}

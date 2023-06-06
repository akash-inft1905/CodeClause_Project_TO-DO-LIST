// script.js

// Get references to HTML elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const tasksList = document.getElementById('tasks');

// Add event listener for form submission
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const taskName = taskInput.value;
  const taskPriority = prioritySelect.value;

  if (taskName.trim() !== '') {
    addTask(taskName, taskPriority);
    taskInput.value = '';
    prioritySelect.value = 'low';
  }
});

// Function to add a task to the list
function addTask(name, priority) {
  const taskItem = document.createElement('li');
  taskItem.onclick=function myFunction() {
    document.getElementById("demo").style.color = "red";
  }
  taskItem.classList.add(priority);
  
  const taskContent = document.createElement('span');
  taskContent.textContent = name;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    taskItem.remove();
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteButton);
  
  tasksList.appendChild(taskItem);
}

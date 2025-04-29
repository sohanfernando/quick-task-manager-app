document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('taskTitle').value.trim();
  const dueDate = document.getElementById('dueDate').value;
  const desc = document.getElementById('description').value.trim() || 'none';

  if (title && dueDate) {
    addTask(title, desc, dueDate);
    this.reset();
    alert("Task added successfully! Redirecting to your tasks...");
    setTimeout(() => {
      window.location.href = 'tasks-list.html';
    }, 1500);
  } else {
    alert("Please fill out all required fields!");
  }
});

document.getElementById('viewTasksBtn').addEventListener('click', function() {
  window.location.href = 'tasks-list.html';
});

function addTask(title, description, dueDate) {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  
  const newTask = {
    id: Date.now(),
    title,
    description,
    dueDate,
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
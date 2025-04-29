document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
  
    document.getElementById('addTaskBtn').addEventListener('click', function() {
      window.location.href = 'task-form.html';
    });
  
    document.getElementById('summaryBtn').addEventListener('click', function() {
      window.location.href = 'summary.html';
    });
  });
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const tasksList = document.getElementById('tasksList');
    tasksList.innerHTML = '';
  
    if (tasks.length === 0) {
      tasksList.innerHTML = '<p class="no-tasks">No tasks found. Add a new task to get started!</p>';
      return;
    }
  
    tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.className = `task-card ${task.completed ? 'completed' : ''}`;
      taskElement.innerHTML = `
        <h3>Task: ${task.title}</h3>
        <p>Description: ${task.description}</p>
        <p class="task-due">Due: ${task.dueDate}</p>
        <div class="task-actions">
          <button class="completed-btn" data-id="${task.id}">Completed</button>
          <button class="pending-btn" data-id="${task.id}">Pending</button>
          <button class="delete-btn" data-id="${task.id}">Delete</button>
        </div>
      `;
      tasksList.appendChild(taskElement);
  
      // Add event listeners
      taskElement.querySelector('.completed-btn').addEventListener('click', () => toggleTaskStatus(task.id, true));
      taskElement.querySelector('.pending-btn').addEventListener('click', () => toggleTaskStatus(task.id, false));
      taskElement.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id));
    });
  }
  
  function toggleTaskStatus(taskId, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
      tasks[taskIndex].completed = completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      loadTasks(); // Refresh the list
    }
  }
  
  function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      loadTasks(); // Refresh the list
      alert('Task deleted successfully!');
    }
  }
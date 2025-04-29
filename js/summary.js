document.addEventListener('DOMContentLoaded', function() {
    updateSummary();
  });
  
  function updateSummary() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
  
    const summaryStats = document.getElementById('summaryStats');
    summaryStats.innerHTML = `
      <h2>Task Summary</h2>
      <div class="stat-item">
        <input type="checkbox" disabled>
        <span>Total: ${totalTasks}</span>
      </div>
      <div class="stat-item">
        <input type="checkbox" ${completedTasks > 0 ? 'checked' : ''} disabled>
        <span>Completed: ${completedTasks}</span>
      </div>
      <div class="stat-item">
        <input type="checkbox" ${pendingTasks > 0 ? '' : 'checked'} disabled>
        <span>Pending: ${pendingTasks}</span>
      </div>
    `;
  }
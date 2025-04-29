document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Logged in successfully! ✅");
    window.location.href = 'task-form.html'; // Redirect to task form
  });
  
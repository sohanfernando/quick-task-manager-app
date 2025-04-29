document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (name && email && password) {
    // You could store in localStorage here if needed
    alert(`Account created successfully for ${name}!`);
    window.location.href = 'login.html'; // Redirect to login
  } else {
    alert("Please fill in all fields.");
  }
});

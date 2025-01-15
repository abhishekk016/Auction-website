document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    // Sample user data (for demonstration purposes)
    let sampleUser = {
      username: 'user123',
      password: 'password123',
    };
  
    if (username === sampleUser.username && password === sampleUser.password) {
      alert('Login successful!');
      window.location.href = 'index.html'; // Redirect to the main page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
  
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let country = document.getElementById('country').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Sample user registration (for demonstration purposes)
    let newUser = {
      username: username,
      email: email,
      password: password,
      country: country,
    };
  
    alert('Registration successful!');
    console.log('New User Registered:', newUser);
    window.location.href = 'login.html'; // Redirect to login page
  });
  
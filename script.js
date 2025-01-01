document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'admin' && password === '0777') {
        message.textContent = 'Login successful! Redirecting...';
        message.className = 'text-green-500';
        alert('Login successful! Welcome back.');
    } else {
        message.textContent = 'Invalid username or password';
        message.className = 'text-red-500';

        // Show error alert
        alert('Error: Invalid username or password. Please try again.');
    }
});

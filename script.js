document.getElementById('proxyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const host = document.getElementById('host').value;
    const port = document.getElementById('port').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let result = `Connecting to: ${host}:${port}`;
    
    if (username) {
        result += `<br>Username: ${username}`;
    }
    
    if (password) {
        result += `<br>Password: ********`;  // Masking the password
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
    resultDiv.style.display = 'block';
});

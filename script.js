function checkCode() {
    const enteredCode = document.getElementById('codeInput').value;
    const correctCode = '354262';  // Replace this with the actual code

    if (enteredCode === correctCode) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('content-section').style.display = 'block';
    } else {
        alert('Incorrect code. Please try again.');
    }
}

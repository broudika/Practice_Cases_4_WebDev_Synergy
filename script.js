document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (email && password.length >= 6) {
        message.textContent = 'Регистрация успешна! Email: ' + email;
        message.style.color = 'green';
    } else {
        message.textContent = 'Ошибка: Проверьте данные.';
        message.style.color = 'red';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('login-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var emailInput = document.getElementById('input-email');
        var senhaInput = document.getElementById('input-senha');

        var email = emailInput.value;
        var senha = senhaInput.value;

        // Verificar se o email e a senha estão corretos
        if (email === 'admin@ccc.com' && senha === 'ccc123') {
            // Acesso permitido
            alert('Login bem-sucedido! Redirecionando para o sistema...');
            window.location.href = 'index.html';
        } else {
            // Acesso negado
            alert('Email ou senha incorretos. Tente novamente.');

        }
    });
});
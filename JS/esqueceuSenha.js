function esqueceuSenha() {
    var formulario = document.getElementById("recuperar-senha");
    if (formulario.checkValidity()) {
        alert("Fique de olho em seu email, entraremos em contato para redefinir sua senha de acesso.");
    } else {
        // Se o formulário não for válido, você pode exibir uma mensagem de erro ou tomar qualquer outra ação necessária
        alert("Preencha todos os campos obrigatórios!");
    }
}
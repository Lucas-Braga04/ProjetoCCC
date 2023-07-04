function esqueceuSenha() {
    var formulario = document.getElementById("recuperar-senha");
    if (formulario.checkValidity()) {
        alert("Fique de olho em seu email, entraremos em contato para redefinir sua senha de acesso.");
    } else {
        alert("Preencha todos os campos obrigatórios!");
    }
}

function mostrarOcultarSenha() {
    var senhaInput = document.getElementById("input-senha");
    var checkbox = document.getElementById("lb-checkbox");

    if (checkbox.checked) {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}

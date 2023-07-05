function mensagemConfirmacao() {
    var botao = event.target;

    // Verifica se a mensagem já existe antes de criá-la novamente
    var mensagemExistente = botao.nextElementSibling;
    if (mensagemExistente && mensagemExistente.classList.contains('mensagem-temporaria')) {
        return; // Evita que a mensagem seja criada novamente
    }

    var mensagem = document.createElement("p");
    mensagem.textContent = "Produto adicionado ao carrinho!!";
    mensagem.classList.add('mensagem-temporaria');

    botao.parentNode.insertBefore(mensagem, botao.nextSibling);

    setTimeout(function () {
        mensagem.remove();
    }, 2000);
}
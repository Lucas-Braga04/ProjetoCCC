function mensagemConfirmacao() {
    var mensagem = document.createElement("p");
    mensagem.textContent = "Produto adicionado ao carrinho!!";

    var botao = document.getElementById("botao-home-carrinho");

    botao.parentNode.insertBefore(mensagem, botao.nextSibling);

    setTimeout(function () {
        mensagem.remove();
    }, 3000);
}
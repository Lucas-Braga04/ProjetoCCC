function mensagemConfirmacao() {
    var mensagem = document.createElement("p");
    mensagem.textContent = "Produto adicionado ao carrinho!!";

    var botao = document.getElementById("botao-home-carrinho"); // Substitua "meuBotao" pelo ID do seu botão

    botao.parentNode.insertBefore(mensagem, botao.nextSibling);

    setTimeout(function () {
        mensagem.remove();
    }, 3000); // A mensagem será removida após 3 segundos (3000 milissegundos)
}
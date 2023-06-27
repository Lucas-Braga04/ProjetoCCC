function alterarQuantidade(valor) {
    var quantidadeElemento = document.getElementById('quantidade');

    var quantidade = parseInt(quantidadeElemento.innerHTML);

    quantidade += valor;

    quantidadeElemento.innerHTML = quantidade;
}
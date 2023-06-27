function alterarQuantidade(valor) {
    var quantidadeElemento = document.getElementById('quantidade');
    var quantidade = parseInt(quantidadeElemento.innerHTML);

    quantidade += valor;

    if (quantidade < 0) {
        quantidade = 0;
    }

    quantidadeElemento.innerHTML = quantidade;
}
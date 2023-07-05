function atualizarQuantidade(btn, incremento) {
    const quantidadeElemento = btn.parentNode.querySelector('.quantidade');
    let quantidade = parseInt(quantidadeElemento.textContent);
    quantidade += incremento;

    if (quantidade < 1) {
        quantidade = 1;
    }

    quantidadeElemento.textContent = quantidade;
}

function adicionarUm(btn) {
    atualizarQuantidade(btn, 1);
}

function subtrairUm(btn) {
    atualizarQuantidade(btn, -1);
}

// Vincule os botões às funções de clique
const botoesAdicionar = document.querySelectorAll('.botao-adicionar');
const botoesSubtrair = document.querySelectorAll('.botao-subtrair');

botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        adicionarUm(botao);
    });
});

botoesSubtrair.forEach((botao) => {
    botao.addEventListener('click', () => {
        subtrairUm(botao);
    });
});
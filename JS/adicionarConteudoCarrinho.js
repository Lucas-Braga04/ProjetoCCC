function addCimento() {
    var divCarrinho = document.createElement("div");
    divCarrinho.className = "card-carrinho";
    divCarrinho.id = "card-carrinho";

    var spanTitulo = document.createElement("span");
    spanTitulo.className = "tituloProduto";
    spanTitulo.innerHTML = "Cimento";
    divCarrinho.appendChild(spanTitulo);

    var btnFechar = document.createElement("button");
    btnFechar.type = "button";
    btnFechar.className = "btn-close";
    btnFechar.setAttribute("aria-label", "Close");
    btnFechar.setAttribute("onclick", "removerDiv(this)");
    divCarrinho.appendChild(btnFechar);

    var divCorpo = document.createElement("div");
    divCorpo.className = "carrinho-corpo";
    divCarrinho.appendChild(divCorpo);

    var divImgItem = document.createElement("div");
    divImgItem.className = "img-card-carrinho";
    var imgItem = document.createElement("img");
    imgItem.src = "IMG/CIMENTO.webp";
    imgItem.alt = "";
    divImgItem.appendChild(imgItem);
    divCorpo.appendChild(divImgItem);

    var divInfoCarrinho = document.createElement("div");
    divInfoCarrinho.className = "card-carrinho-info";
    divInfoCarrinho.id = "card-carrinho-info";
    var spanValor = document.createElement("span");
    spanValor.id = "valor";
    spanValor.innerHTML = "Valor: R$<span class='valores'>49,99</span>";
    divInfoCarrinho.appendChild(spanValor);
    var spanQuantidade = document.createElement("span");
    spanQuantidade.innerHTML = "Quantidade: <span class='quantidade-itens'>1</span>";
    divInfoCarrinho.appendChild(spanQuantidade);
    var spanCodigo = document.createElement("span");
    spanCodigo.innerHTML = "Código do produto: #654879";
    divInfoCarrinho.appendChild(spanCodigo);
    divCorpo.appendChild(divInfoCarrinho);

    var divDestino = document.getElementById("corpo-offcanvas");

    divDestino.appendChild(divCarrinho);

    localStorage.setItem("divCarrinho", divCarrinho.outerHTML);

    window.addEventListener("DOMContentLoaded", function () {
        var divCarrinho = localStorage.getItem("divCarrinho");
        if (divCarrinho) {
            var divDestino = document.getElementById("corpo-offcanvas");
            divDestino.innerHTML = divCarrinho;
        }
    });
}
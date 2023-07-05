function addCimento() {
    var divCarrinho = document.createElement("div");
    divCarrinho.className = "card-carrinho";
    divCarrinho.id = "card-carrinho";

    var btnFechar = document.createElement("button");
    btnFechar.type = "button";
    btnFechar.className = "btn-close";
    btnFechar.setAttribute("aria-label", "Close");
    btnFechar.setAttribute("onclick", "removerDiv(this)");
    divCarrinho.appendChild(btnFechar);

    var spanTitulo = document.createElement("span");
    spanTitulo.className = "tituloProduto";
    spanTitulo.innerHTML = "Cimento-a10";
    divCarrinho.appendChild(spanTitulo);

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
    var valorDiv = document.getElementById('valorDiv1');
    var valor = valorDiv.textContent;
    spanQuantidade.innerHTML = "Quantidade: <span class='quantidade-itens'>" + valor + "</span>";
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

function addPorcelanato() {
    var divCarrinho = document.createElement("div");
    divCarrinho.className = "card-carrinho";
    divCarrinho.id = "card-carrinho";

    var btnFechar = document.createElement("button");
    btnFechar.type = "button";
    btnFechar.className = "btn-close";
    btnFechar.setAttribute("aria-label", "Close");
    btnFechar.setAttribute("onclick", "removerDiv(this)");
    divCarrinho.appendChild(btnFechar);

    var spanTitulo = document.createElement("span");
    spanTitulo.className = "tituloProduto";
    spanTitulo.innerHTML = "Porcelanato-z63";
    divCarrinho.appendChild(spanTitulo);

    var divCorpo = document.createElement("div");
    divCorpo.className = "carrinho-corpo";
    divCarrinho.appendChild(divCorpo);

    var divImgItem = document.createElement("div");
    divImgItem.className = "img-card-carrinho";
    var imgItem = document.createElement("img");
    imgItem.src = "IMG/PORCELANATOS.jpg";
    imgItem.alt = "";
    divImgItem.appendChild(imgItem);
    divCorpo.appendChild(divImgItem);

    var divInfoCarrinho = document.createElement("div");
    divInfoCarrinho.className = "card-carrinho-info";
    divInfoCarrinho.id = "card-carrinho-info";
    var spanValor = document.createElement("span");
    spanValor.id = "valor";
    spanValor.innerHTML = "Valor: R$<span class='valores'>69,50</span>";
    divInfoCarrinho.appendChild(spanValor);
    var spanQuantidade = document.createElement("span");
    var valorDiv = document.getElementById('valorDiv2');
    var valor = valorDiv.textContent;
    spanQuantidade.innerHTML = "Quantidade: <span class='quantidade-itens'>" + valor + "</span>";
    divInfoCarrinho.appendChild(spanQuantidade);
    var spanCodigo = document.createElement("span");
    spanCodigo.innerHTML = "Código do produto: #23498";
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

function addArgamassa() {
    var divCarrinho = document.createElement("div");
    divCarrinho.className = "card-carrinho";
    divCarrinho.id = "card-carrinho";

    var btnFechar = document.createElement("button");
    btnFechar.type = "button";
    btnFechar.className = "btn-close";
    btnFechar.setAttribute("aria-label", "Close");
    btnFechar.setAttribute("onclick", "removerDiv(this)");
    divCarrinho.appendChild(btnFechar);

    var spanTitulo = document.createElement("span");
    spanTitulo.className = "tituloProduto";
    spanTitulo.innerHTML = "Argamassa-f32";
    divCarrinho.appendChild(spanTitulo);

    var divCorpo = document.createElement("div");
    divCorpo.className = "carrinho-corpo";
    divCarrinho.appendChild(divCorpo);

    var divImgItem = document.createElement("div");
    divImgItem.className = "img-card-carrinho";
    var imgItem = document.createElement("img");
    imgItem.src = "IMG/ARGAMASSA.webp";
    imgItem.alt = "";
    divImgItem.appendChild(imgItem);
    divCorpo.appendChild(divImgItem);

    var divInfoCarrinho = document.createElement("div");
    divInfoCarrinho.className = "card-carrinho-info";
    divInfoCarrinho.id = "card-carrinho-info";
    var spanValor = document.createElement("span");
    spanValor.id = "valor";
    spanValor.innerHTML = "Valor: R$<span class='valores'>39,99</span>";
    divInfoCarrinho.appendChild(spanValor);
    var spanQuantidade = document.createElement("span");
    var valorDiv = document.getElementById('valorDiv3');
    var valor = valorDiv.textContent;
    spanQuantidade.innerHTML = "Quantidade: <span class='quantidade-itens'>" + valor + "</span>";
    divInfoCarrinho.appendChild(spanQuantidade);
    var spanCodigo = document.createElement("span");
    spanCodigo.innerHTML = "Código do produto: #65781";
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

function addAlicate() {
    var divCarrinho = document.createElement("div");
    divCarrinho.className = "card-carrinho";
    divCarrinho.id = "card-carrinho";

    var btnFechar = document.createElement("button");
    btnFechar.type = "button";
    btnFechar.className = "btn-close";
    btnFechar.setAttribute("aria-label", "Close");
    btnFechar.setAttribute("onclick", "removerDiv(this)");
    divCarrinho.appendChild(btnFechar);

    var spanTitulo = document.createElement("span");
    spanTitulo.className = "tituloProduto";
    spanTitulo.innerHTML = "Alicate-a11";
    divCarrinho.appendChild(spanTitulo);

    var divCorpo = document.createElement("div");
    divCorpo.className = "carrinho-corpo";
    divCarrinho.appendChild(divCorpo);

    var divImgItem = document.createElement("div");
    divImgItem.className = "img-card-carrinho";
    var imgItem = document.createElement("img");
    imgItem.src = "IMG/ALICATE-CORTE.webp";
    imgItem.alt = "";
    divImgItem.appendChild(imgItem);
    divCorpo.appendChild(divImgItem);

    var divInfoCarrinho = document.createElement("div");
    divInfoCarrinho.className = "card-carrinho-info";
    divInfoCarrinho.id = "card-carrinho-info";
    var spanValor = document.createElement("span");
    spanValor.id = "valor";
    spanValor.innerHTML = "Valor: R$<span class='valores'>80,00</span>";
    divInfoCarrinho.appendChild(spanValor);
    var spanQuantidade = document.createElement("span");
    var valorDiv = document.getElementById('valorDiv4');
    var valor = valorDiv.textContent;
    spanQuantidade.innerHTML = "Quantidade: <span class='quantidade-itens'>" + valor + "</span>";
    divInfoCarrinho.appendChild(spanQuantidade);
    var spanCodigo = document.createElement("span");
    spanCodigo.innerHTML = "Código do produto: #31972";
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

function addFerro() {
    var divCarrinho = document.createElement("div");
    divCarrinho.className = "card-carrinho";
    divCarrinho.id = "card-carrinho";

    var btnFechar = document.createElement("button");
    btnFechar.type = "button";
    btnFechar.className = "btn-close";
    btnFechar.setAttribute("aria-label", "Close");
    btnFechar.setAttribute("onclick", "removerDiv(this)");
    divCarrinho.appendChild(btnFechar);

    var spanTitulo = document.createElement("span");
    spanTitulo.className = "tituloProduto";
    spanTitulo.innerHTML = "Coluna-f99";
    divCarrinho.appendChild(spanTitulo);

    var divCorpo = document.createElement("div");
    divCorpo.className = "carrinho-corpo";
    divCarrinho.appendChild(divCorpo);

    var divImgItem = document.createElement("div");
    divImgItem.className = "img-card-carrinho";
    var imgItem = document.createElement("img");
    imgItem.src = "IMG/coluna-ferro.webp";
    imgItem.alt = "";
    divImgItem.appendChild(imgItem);
    divCorpo.appendChild(divImgItem);

    var divInfoCarrinho = document.createElement("div");
    divInfoCarrinho.className = "card-carrinho-info";
    divInfoCarrinho.id = "card-carrinho-info";
    var spanValor = document.createElement("span");
    spanValor.id = "valor";
    spanValor.innerHTML = "Valor: R$<span class='valores'>100,00</span>";
    divInfoCarrinho.appendChild(spanValor);
    var spanQuantidade = document.createElement("span");
    var valorDiv = document.getElementById('valorDiv5');
    var valor = valorDiv.textContent;
    spanQuantidade.innerHTML = "Quantidade: <span class='quantidade-itens'>" + valor + "</span>";
    divInfoCarrinho.appendChild(spanQuantidade);
    var spanCodigo = document.createElement("span");
    spanCodigo.innerHTML = "Código do produto: #18900";
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

function addTijolo() {
    var divCarrinho = document.createElement("div");
    divCarrinho.className = "card-carrinho";
    divCarrinho.id = "card-carrinho";

    var btnFechar = document.createElement("button");
    btnFechar.type = "button";
    btnFechar.className = "btn-close";
    btnFechar.setAttribute("aria-label", "Close");
    btnFechar.setAttribute("onclick", "removerDiv(this)");
    divCarrinho.appendChild(btnFechar);

    var spanTitulo = document.createElement("span");
    spanTitulo.className = "tituloProduto";
    spanTitulo.innerHTML = "Tijolo-c8f";
    divCarrinho.appendChild(spanTitulo);

    var divCorpo = document.createElement("div");
    divCorpo.className = "carrinho-corpo";
    divCarrinho.appendChild(divCorpo);

    var divImgItem = document.createElement("div");
    divImgItem.className = "img-card-carrinho";
    var imgItem = document.createElement("img");
    imgItem.src = "IMG/tijolo-concreto.webp";
    imgItem.alt = "";
    divImgItem.appendChild(imgItem);
    divCorpo.appendChild(divImgItem);

    var divInfoCarrinho = document.createElement("div");
    divInfoCarrinho.className = "card-carrinho-info";
    divInfoCarrinho.id = "card-carrinho-info";
    var spanValor = document.createElement("span");
    spanValor.id = "valor";
    spanValor.innerHTML = "Valor: R$<span class='valores'>15,00</span>";
    divInfoCarrinho.appendChild(spanValor);
    var spanQuantidade = document.createElement("span");
    var valorDiv = document.getElementById('valorDiv6');
    var valor = valorDiv.textContent;
    spanQuantidade.innerHTML = "Quantidade: <span class='quantidade-itens'>" + valor + "</span>";
    divInfoCarrinho.appendChild(spanQuantidade);
    var spanCodigo = document.createElement("span");
    spanCodigo.innerHTML = "Código do produto: #98333";
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
function entrar() {
    var nome = document.getElementById("inputName").value;
    if (nome == "" || nome == null) return;

    indexCarrinhoAtual = findCarrinho(nome);
    if (indexCarrinhoAtual == -1) {
        indexCarrinhoAtual = listaCarrinhos.push(new Carrinho(nome)) - 1;
    }

    document.getElementById("inputName").value = "";
}

function sair() {
    indexCarrinhoAtual = -1;
}

function findCarrinho(nomeDono) {
    for (var i = 0; i < listaCarrinhos.length; i++) {
        if (nomeDono == listaCarrinhos[i].dono)
            return i;
    }
    return -1;
}

function comprar(idProduto) {
    if (indexCarrinhoAtual == -1) {
        alert("Por favor, antes de comprar, identifique-se");
    } else {
        listaCarrinhos[indexCarrinhoAtual].addProduto(idProduto);
        alert("Produto adicionado ao carrinho com sucesso!");
    }
}

function showDesc(id) {
    id = "desc" + id;
    var desc = document.getElementById(id);
    document.getElementById(id).className = "description-show";
}

function hideDesc(id) {
    id = "desc" + id;
    document.getElementById(id).className = "description-hide";
}

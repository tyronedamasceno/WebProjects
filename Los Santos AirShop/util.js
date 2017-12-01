function entrar() {
    var nome = document.getElementById("inputName").value;
    if (nome == "" || nome == null) return;

    var index = findCarrinho(nome);
    if (index == -1) {
        index = listaCarrinhos.push(new Carrinho(nome));
    }
    indexCarrinhoAtual = index;
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

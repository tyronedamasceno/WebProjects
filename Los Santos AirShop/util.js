/*
Autor: Tyrone Damasceno
2016044500
*/

function entrar() {
    var nome = document.getElementById("inputName").value;
    if (nome == "" || nome == null) return;
    document.getElementById("welcomeMessage").innerHTML = "Bem vindo(a) " + nome + "!!!";

    indexCarrinhoAtual = findCarrinho(nome);
    if (indexCarrinhoAtual == -1) {
        indexCarrinhoAtual = listaCarrinhos.push(new Carrinho(nome)) - 1;
    }
    document.getElementById("inputName").value = "";

    document.getElementById("loginBtn").className = "form-inline hide";
    document.getElementById("logoutBtn").className = "form-inline show";
    document.getElementById("openResumoBtn").className = "btn btn-primary show";
}

function sair() {
    indexCarrinhoAtual = -1;
    fecharResumo();
    document.getElementById("welcomeMessage").innerHTML = "";
    document.getElementById("loginBtn").className = "form-inline show";
    document.getElementById("logoutBtn").className = "form-inline hide";
    document.getElementById("openResumoBtn").className = "btn btn-primary hide";
    document.getElementById("closeResumoBtn").className = "btn btn-primary hide";
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
    document.getElementById(id).className = "description show";
}

function hideDesc(id) {
    id = "desc" + id;
    document.getElementById(id).className = "description hide";
}

function abrirResumo() {
    document.getElementById("openResumoBtn").className = "btn btn-primary hide";
    document.getElementById("closeResumoBtn").className = "btn btn-primary show";
    document.getElementById("divResumo").className = "row show";

    var tabela = document.getElementById("tabelaResumo");
    while (tabela.rows.length > 1) {
		tabela.deleteRow(1);
	}

    var resumo = listaCarrinhos[indexCarrinhoAtual].calcularTotal();
    var discriminacao = resumo[0];
    var valorTotal = resumo[1];

    for (var i = 0; i < discriminacao.length; i++) {
        var linha = tabela.insertRow();
        for (var j = 0; j < discriminacao[i].length; j++) {
            if (j < 4)
                linha.insertCell().innerHTML = discriminacao[i][j];
            else
                linha.insertCell().innerHTML = maskMoney(discriminacao[i][j]);
        }
    }

    var ultimaLinha = tabela.insertRow();
    ultimaLinha.insertCell().innerHTML = "<b>Valor total</b>"
    ultimaLinha.insertCell().innerHTML = "---";
    ultimaLinha.insertCell().innerHTML = "---";
    ultimaLinha.insertCell().innerHTML = "---";
    ultimaLinha.insertCell().innerHTML = "<b>US$ "+maskMoney(valorTotal)+"</b>"

}

function fecharResumo() {
    document.getElementById("openResumoBtn").className = "btn btn-primary show";
    document.getElementById("closeResumoBtn").className = "btn btn-primary hide";
    document.getElementById("divResumo").className = "row hide";
}

function maskMoney(input) {
    var output = "" + input;
    output = output.split("").reverse();
    for (var i = 3; i < output.length; i += 4) {
        output.splice(i, 0, ".");
    }
    return output.reverse().join("");
}

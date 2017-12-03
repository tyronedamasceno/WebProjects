/*
Autor: Tyrone Damasceno
2016044500
*/

var listaProdutos = [];
var listaCarrinhos = [];
var indexCarrinhoAtual = -1;
function Produto(nome, descricao, preco, peso, velocidade, capacidade) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.peso = peso;
    this.velocidade = velocidade;
    this.capacidade = capacidade;
    this.foto = "img/" + this.nome.toLowerCase().split(' ').join('-') + ".jpg";
    this.codigo = "";
    for (var i = 0; i < nome.split(' ').length; i++) {
        this.codigo += nome.split(' ')[i].slice(0, 3);
    }
}

function Carrinho(dono) {
    this.dono = dono;
    this.produtosNoCarrinho = [];
    this.qtdItens = new Map();
    this.valorTotal = 0;

    this.addProduto = function(idProduto) {
        this.produtosNoCarrinho.push(listaProdutos[idProduto]);
        if (this.qtdItens.get(listaProdutos[idProduto]) === undefined) {
            this.qtdItens.set(listaProdutos[idProduto], 1);
        } else {
            this.qtdItens.set(listaProdutos[idProduto], this.qtdItens.get(listaProdutos[idProduto]) + 1);
        }
    }

    this.calcularTotal = function() {
        var discriminacao = [];
        for (var [produto, qtd] of this.qtdItens) {
            discriminacao.push(
                [produto.nome, qtd, produto.preco, produto.peso*qtd, produto.preco*qtd*12.5*produto.peso]
            );
        }
        var valorTotal = 0;
        for (var i = 0; i < discriminacao.length; i++) {
            valorTotal += discriminacao[i][4];
        }
        return [discriminacao, valorTotal];
    }
}

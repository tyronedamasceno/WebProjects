var listaProdutos = [];
var listaUsuarios = [];

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
    var produtosNoCarrinho = [];
    var valorTotalItem = [];
    var valorTotalCompra;

    this.addProduto = function(produto) {

    }

    this.removeProduto = function(produto) {

    }
}

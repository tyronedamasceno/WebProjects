for (var i = 0; i < listaProdutos.length; i++) {
    var id = "item" + (i+1);
    var item = document.getElementById(id);
    item.innerHTML += "<strong>"+listaProdutos[i].nome + "</strong><br>";
    item.innerHTML += "<img src=\""+listaProdutos[i].foto+"\"><br>";
    item.innerHTML += "US$"+listaProdutos[i].preco+"<br>";

    //item.innerHTML += "<p>"+listaProdutos[i].descricao+"</p><br>";
}

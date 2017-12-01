for (var i = 0; i < listaProdutos.length; i++) {
    var id = "item" + (i+1);
    var item = document.getElementById(id);
    item.innerHTML += "<strong>"+listaProdutos[i].nome + "</strong><br>";
    item.innerHTML += "<img src=\""+listaProdutos[i].foto+"\" onMouseOver=\"showDesc("+i+")\" onMouseOut=\"hideDesc("+i+")\"><br>";
    item.innerHTML += "<p id=\"desc"+i+"\" class=\"description-hide\">"+listaProdutos[i].descricao+"</p>"
    item.innerHTML += "US$ <strong>"+listaProdutos[i].preco+"</strong><br>";

    //item.innerHTML += "<p>"+listaProdutos[i].descricao+"</p><br>";
}

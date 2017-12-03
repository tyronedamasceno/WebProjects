/*
Autor: Tyrone Damasceno
2016044500
*/

for (var i = 0; i < listaProdutos.length; i++) {
    var id = "item" + (i+1);
    var item = document.getElementById(id);
    item.innerHTML += "<strong>"+listaProdutos[i].nome + "</strong><br>";
    item.innerHTML += "<img src=\""+listaProdutos[i].foto+"\" onMouseOver=\"showDesc("+i+")\" onMouseOut=\"hideDesc("+i+")\"><br>";
    item.innerHTML += "<p id=\"desc"+i+"\" class=\"descriphide\">"+listaProdutos[i].descricao+"</p>"
    item.innerHTML += "<input type=\"button\" value=\"Comprar\" class=\"btn btn-primary\" onclick=\"comprar("+i+")\"></input>";
    item.innerHTML += "    US$ <strong>"+listaProdutos[i].preco+"</strong>";

}

function inicializaTabela() {
	var nome1 = document.getElementById("placarJ1");
	var nome2 = document.getElementById("placarJ2");
	nome1.innerHTML = listaDuplas[duplaAtualIndex].jogador1.nome;
	nome2.innerHTML = listaDuplas[duplaAtualIndex].jogador2.nome;
	var tabela = document.getElementById("Placar");
	while (tabela.rows.length >= 2) {
		tabela.deleteRow(1);
	}
	var linha = tabela.insertRow();
	linha.insertCell().innerHTML = listaDuplas[duplaAtualIndex].pontosJ1;
	linha.insertCell().innerHTML = listaDuplas[duplaAtualIndex].pontosJ2;
	for (var i = 0; i < listaDuplas[duplaAtualIndex].jogadasJ1.length; i++) {
		var linha = tabela.insertRow();
		linha.insertCell().innerHTML = listaDuplas[duplaAtualIndex].jogadasJ1[i];
		linha.insertCell().innerHTML = listaDuplas[duplaAtualIndex].jogadasJ2[i];
	}
}

function atualizaTabela() {
	var tabela = document.getElementById("Placar");
	tabela.rows[1].cells[0].innerHTML = listaDuplas[duplaAtualIndex].pontosJ1;
	tabela.rows[1].cells[1].innerHTML = listaDuplas[duplaAtualIndex].pontosJ2;
	var linha = tabela.insertRow();
	var pos = listaDuplas[duplaAtualIndex].jogadasJ1.length-1;
	linha.insertCell().innerHTML = listaDuplas[duplaAtualIndex].jogadasJ1[pos];
	linha.insertCell().innerHTML = listaDuplas[duplaAtualIndex].jogadasJ2[pos];
}
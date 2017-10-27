function inicializaTabela() {

	var nome1 = document.getElementById("placarJ1").innerHTML = listaDuplas[duplaAtualIndex].jogador1.nome;
	var nome2 = document.getElementById("placarJ2").innerHTML = listaDuplas[duplaAtualIndex].jogador2.nome;
	
	var tabela = document.getElementById("Placar");
	
	while (tabela.rows.length >= 2) {
		tabela.deleteRow(1);
	}

	var linha = tabela.insertRow();
	linha.insertCell().innerHTML = listaDuplas[duplaAtualIndex].pontosJ1;
	linha.insertCell().innerHTML = listaDuplas[duplaAtualIndex].pontosJ2;
	
	for (var i = 0; i < listaDuplas[duplaAtualIndex].jogadasJ1.length; i++) {
		var imgJ1 = listaDuplas[duplaAtualIndex].jogadasJ1[i].toLowerCase() + '.jpg';
		var imgJ2 = listaDuplas[duplaAtualIndex].jogadasJ2[i].toLowerCase() + '.jpg';

		var linha = tabela.insertRow();
		linha.insertCell().innerHTML = "<img src="+imgJ1+" class='naTabela'/>";	
		linha.insertCell().innerHTML = "<img src="+imgJ2+" class='naTabela'/>";
	}
}

function atualizaTabela() {
	
	var tabela = document.getElementById("Placar");

	tabela.rows[1].cells[0].innerHTML = listaDuplas[duplaAtualIndex].pontosJ1;
	tabela.rows[1].cells[1].innerHTML = listaDuplas[duplaAtualIndex].pontosJ2;
	
	var linha = tabela.insertRow();
	var pos = listaDuplas[duplaAtualIndex].jogadasJ1.length-1;

	var imgJ1 = listaDuplas[duplaAtualIndex].jogadasJ1[pos].toLowerCase() + '.jpg';
	var imgJ2 = listaDuplas[duplaAtualIndex].jogadasJ2[pos].toLowerCase() + '.jpg';

	linha.insertCell().innerHTML = "<img src="+imgJ1+" class='naTabela'/>";
	linha.insertCell().innerHTML = "<img src="+imgJ2+" class='naTabela'/>";
}
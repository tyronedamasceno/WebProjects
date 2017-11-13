function inicializaTabelaPlacar() {

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

function atualizaTabelaPlacar() {
	
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

function showButtons() {
	document.getElementById("divMain").className = "onGame";
	document.getElementById("botSair").className = "onGame";
	document.getElementById("botEntrar").className = "offGame";
	document.getElementById("divPlacar").className = "onGame";
	document.getElementById("divRelogio").className = "onGame";
	document.getElementById("divWelcome").className = "onGame";
}

function hideButtons() {
	document.getElementById("divMain").className = "offGame";
	document.getElementById("botSair").className = "offGame";
	document.getElementById("botEntrar").className = "onGame";
	document.getElementById("divPlacar").className = "offGame";
	document.getElementById("divRanking").className = "onGame";
	document.getElementById("divRelogio").className = "offGame";
	document.getElementById("divWelcome").className = "offGame";
}

function atualizaTabelaRanking() {
	var copiaListaJogadores = listaJogadores;
	copiaListaJogadores.sort(function(j1, j2) {
		return j2.pontuacaoTotal - j1.pontuacaoTotal;
	});

	var tabela = document.getElementById("Ranking");
	var nCells = tabela.rows[0].cells.length - 1;
	for (var i = 0; i < nCells; i++) {
		tabela.rows[0].deleteCell(-1);
		tabela.rows[1].deleteCell(-1);
	}
	
	for (var i = 0; i < copiaListaJogadores.length; i++) {
		tabela.rows[0].insertCell().innerHTML = copiaListaJogadores[i].nome;
		tabela.rows[1].insertCell().innerHTML = copiaListaJogadores[i].pontuacaoTotal;
	}
}
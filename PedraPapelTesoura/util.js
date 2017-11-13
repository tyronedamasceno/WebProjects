function findJogador(jogador) {
	for(var i = 0; i < listaJogadores.length; i++) {
		if (listaJogadores[i].nome == jogador.nome)
			return i;
	}
	return -1;
}

function addJogador(jogador) {
	var index = findJogador(jogador);
	if (index == -1) {
		index = listaJogadores.push(jogador);
		index--;
	}
	return index;
}

function findDupla(dupla) {
	for (var i = 0; i < listaDuplas.length; i++) {
		if (listaDuplas[i].jogador1.nome == dupla.jogador1.nome &&
			listaDuplas[i].jogador2.nome == dupla.jogador2.nome)
			return i;
	}
	return -1;
}

function addDupla(dupla) {
	var index = findDupla(dupla);
	if (index == -1) {
		index = listaDuplas.push(dupla);
		index--;
	}
	return index;
}

function entrar() {
	if (jogadorAtualIndex != -1) {
		alert('Já há um jogador logado.\nSe deseja trocar clique em SAIR');
		return;
	}
	var nome = prompt('Qual seu nome?');
	if (nome == "" || nome == null) {
		nome = 'JogadorAnonimo' +  listaJogadores.length;
	}
	var sexo = prompt('Qual seu sexo?');
	if (sexo == "" || sexo == null) {
		sexo = 'Masculino';
	}
	var tipoJogador = 'Humano';

	var novoJogador = new Jogador(nome, sexo, tipoJogador);
	jogadorAtualIndex = addJogador(novoJogador);
	var dupla = new Dupla(listaJogadores[jogadorAtualIndex], computadorPlayer);
	duplaAtualIndex = addDupla(dupla);
	inicializaTabelaPlacar();
	showButtons();
	tempo = +new Date();
	parado = 0;
	atualizaTempo();
	tempoControle = window.setInterval(atualizaTempo, 600);
}

function sair() {
	var secs = Math.floor((+new Date() - tempo) / 1000);
	listaJogadores[jogadorAtualIndex].tempoJogado += secs;
	listaJogadores[jogadorAtualIndex].pontuacaoTotal = listaDuplas[duplaAtualIndex].pontosJ1;

	if (jogadorAtualIndex != -1) {
		jogadorAtualIndex = -1;
		duplaAtualIndex = -1;
		alert('Até mais');
	} else {
		alert('Nenhum jogador logado!');
	}

	hideButtons();
	atualizaTabelaRanking();
	window.clearInterval(tempoControle);
	parado = 1;
}

function jogar(jogada) {
	if (jogadorAtualIndex == -1) {
		alert('Por favor, identifique-se!\nClique em ENTRAR');
	} else {
		listaDuplas[duplaAtualIndex].partida(jogada, listaDuplas[duplaAtualIndex].jogador2.jogadaComputador());
	}
	atualizaTabelaPlacar();
}

var tempo = 0;
var tempoControle = 0;
var parado = 1;

function atualizaTempo() {
	if (parado) return;
	var secs = Math.floor((+new Date() - tempo) / 1000);
	var display = listaJogadores[jogadorAtualIndex].tempoJogado + secs;
	document.getElementById('DisplayRelogio').innerHTML = display;
	return;
}
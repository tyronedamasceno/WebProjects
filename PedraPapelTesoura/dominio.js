var listaJogadores = [];
var listaDuplas = [];
var duplaAtualIndex = -1;
var jogadorAtualIndex = -1;
var computadorPlayer = new Jogador('Computador', 'Masculino', 'Computador');

function Dupla(jogador1, jogador2) {
	this.jogador1 = jogador1;
	this.jogador2 = jogador2;
	this.pontosJ1 = 0;
	this.pontosJ2 = 0;
	this.jogadasJ1 = [];
	this.jogadasJ2 = [];

	this.partida = function(jogada1, jogada2) {
		if (jogada1 == jogada2) {
			this.pontosJ1++; this.pontosJ2++;
			this.jogadasJ1.push(jogada1);
			this.jogadasJ2.push(jogada2);
			var message = `${jogada1} e ${jogada2}, empate!!!`;
			alert(message);
		} else if (jogada1 == 'Pedra' && jogada2 == 'Tesoura') {
			this.pontosJ1 += 3;
			this.jogadasJ1.push(jogada1);
			this.jogadasJ2.push(jogada2);
			var message = `${jogada1} ganha de ${jogada2}`;
			alert(message);
		} else if (jogada1 == 'Pedra' && jogada2 == 'Papel') {
			this.pontosJ2 += 3;
			this.jogadasJ1.push(jogada1);
			this.jogadasJ2.push(jogada2);
			var message = `${jogada2} ganha de ${jogada1}`;
			alert(message);
		} else if (jogada1 == 'Papel' && jogada2 == 'Pedra') {
			this.pontosJ1 += 3;
			this.jogadasJ1.push(jogada1);
			this.jogadasJ2.push(jogada2);
			var message = `${jogada1} ganha de ${jogada2}`;
			alert(message);
		} else if (jogada1 == 'Papel' && jogada2 == 'Tesoura') {
			this.pontosJ2 += 3;
			this.jogadasJ1.push(jogada1);
			this.jogadasJ2.push(jogada2);
			var message = `${jogada2} ganha de ${jogada1}`;
			alert(message);
		} else if (jogada1 == 'Tesoura' && jogada2 == 'Papel') {
			this.pontosJ1 += 3;
			this.jogadasJ1.push(jogada1);
			this.jogadasJ2.push(jogada2);
			var message = `${jogada1} ganha de ${jogada2}`;
			alert(message);
		} else if (jogada1 == 'Tesoura' && jogada2 == 'Papel') {
			this.pontosJ2 += 3;
			this.jogadasJ1.push(jogada1);
			this.jogadasJ2.push(jogada2);
			var message = `${jogada2} ganha de ${jogada1}`;
			alert(message);
		} else {
			alert('Entradas inválidas')
		}
	}
}

function Jogador(nome, sexo, tipoJogador) {
	this.nome = nome;
	if (sexo[0].toUpperCase() == 'M') this.sexo = 'Masculino';
	else this.sexo = 'Feminino';
	if (tipoJogador[0].toUpperCase()	 == 'H') this.tipoJogador = 'Humano';
	else this.tipoJogador = 'Computador';
}

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
	while (nome == "") {
		alert('Nome inválido');
		nome = prompt('Qual seu nome?');
	}
	var sexo = prompt('Qual seu sexo?');
	if (sexo == "") {
		sexo = 'Masculino';
	}
	var tipoJogador = 'Humano';

	var novoJogador = new Jogador(nome, sexo, tipoJogador);
	jogadorAtualIndex = addJogador(novoJogador);
}

function sair() {
	if (jogadorAtualIndex != -1) {
		jogadorAtualIndex = -1;
		alert('Até mais');
	} else {
		alert('Nenhum jogador logado!');
	}
}

function jogar(jogada) {
	if (jogadorAtualIndex == -1) {
		alert('Por favor, identifique-se!\nClique em ENTRAR');
	} else {
		var dupla = new Dupla(listaJogadores[jogadorAtualIndex], computadorPlayer);
		duplaAtualIndex = addDupla(dupla);
		listaDuplas[duplaAtualIndex].partida(jogada, jogadaComputador());
	}
}

function jogadaComputador() {
	var ops = ['Pedra', 'Papel', 'Tesoura'];
	return ops[Math.floor(Math.random()*ops.length)];
}
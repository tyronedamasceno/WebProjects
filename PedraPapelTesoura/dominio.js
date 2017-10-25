var listaJogadores = [];
var listaDuplas = [];

function Dupla(jogador1, jogador2) {
	if (jogador1.nome > jogador2.nome) {
		aux = jogador1;
		jogador1 = jogador2;
		jogador2 = aux;
	}
	this.jogador1 = jogador1;
	this.jogador2 = jogador2;
	this.pontosJ1 = 0;
	this.pontosJ2 = 0;
	this.jogadasJ1 = [];
	this.jogadasJ2 = [];
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

function findDupla(dupla) {
	for (var i = 0; i < listaDuplas.length; i++) {
		if (listaDuplas[i].jogador1.nome == dupla.jogador1.nome
			&& listaDuplas[i].jogador2.nome == dupla.jogador2.nome)
			return i;
	}
	return -1;
}

function addJogador(jogador) {
	if (findJogador(jogador) == -1) {
		listaJogadores.push(jogador);
	}
}
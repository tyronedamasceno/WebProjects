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
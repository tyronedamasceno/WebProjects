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
}

function sair() {
	if (jogadorAtualIndex != -1) {
		jogadorAtualIndex = -1;
		duplaAtualIndex = -1;
		alert('Até mais');
	} else {
		alert('Nenhum jogador logado!');
	}
}

function jogar(jogada) {
	if (jogadorAtualIndex == -1) {
		alert('Por favor, identifique-se!\nClique em ENTRAR');
	} else {
		listaDuplas[duplaAtualIndex].partida(jogada, jogadaComputador());
	}
}

function jogadaComputador() {
	var ops = ['Pedra', 'Papel', 'Tesoura'];
	return ops[Math.floor(Math.random()*ops.length)];
}
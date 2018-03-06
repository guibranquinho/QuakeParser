//Função para DesabilitarDiv
function desactiveDiv(div){
	document.getElementById(div).style.display = "none";
}

//Função para HabilitarDiv
function activeDiv(div,focus){
	document.getElementById(div).style.display = "block";
	if(focus){
		document.getElementById(focus).focus();
	}
}

//Função para filtrar tabela por usuário
function FilterByPlayers(){
	//Seleciona tabela
	var tabela = document.getElementById("tabRelatorio");
	//Seleciona linhas
	var linhas = tabela.getElementsByTagName("table");
	var player = document.getElementById('playerName').value

	var index = 1
	//Para cada linha, verifica se há o usuário
	for(i=1;i<=linhas.length;i++){

		//Seleciono a tabela de jogadores da linha
		var players = document.getElementById("Players"+index).innerHTML
		

		//Se não encontrar player informado
		//deleta a linha, e desce um no i
		if(players.toLowerCase().indexOf(player.toLowerCase()) == -1){
			tabela.deleteRow(i);
			i = i-1
		}
		//acrescenta o index
		index++

	}

	//Ativa a div com o relatorio
	activeDiv('divAll')


	//Caso não encontre, da mensagem de nenhum usuário encontrado
	var linhasFinal = tabela.getElementsByTagName("table");
	if(linhasFinal.length == 0){
		var row = tabela.insertRow(1)
		row.innerHTML = "NO PLAYERS FOUND"
	}

	//desabilita div customizar, e habilita a restart
	desactiveDiv('customizePlayer')
	activeDiv('restart')
	
	
}


//Função para caso reconheça a tecla enter, 
//clica automatico para gerar por "players"
function ifEnter(){
	if (event.keyCode == 13){
		document.getElementById('generatePlayers').click();
	}
}


//Função que seleciona a tabela e envia para print 
function printTable(){
	var tabela = document.getElementById("divAll").innerHTML
	tela_impressao = window.open('about:blank');
	tela_impressao.document.write(tabela);
	tela_impressao.window.print();
	tela_impressao.window.close();
}



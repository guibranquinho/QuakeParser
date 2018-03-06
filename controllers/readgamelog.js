module.exports = function(app){
	//Exporta o Parser, que pode ser chamado
	var Parser = {
		TrataLog:function(req,res){
			//utilizado para ler o arquivo .log
			var fs = require('fs');
			var JsonText ='{\n';

			//Solicito a leitura do arquivo games.log
			fs.readFile('games.log','utf-8', function(err,data){
				//Caso retorne erro
				if(err){
					console.error('Impossível ler o arquivo');
					process.exit(1)
				}
				
				//Gero um Array separando por inicio de jogo
				var GameTxt = data.split("InitGame")
				

				//Faz a leiutra de jogo a jogo;
				for(i=1;i < GameTxt.length;i++){
					//Kills por jogo
					var Kills = (GameTxt[i]).split('Kill:')
					//Numero de morte que recebe kills-1
					var nMorte = Kills.length -1

					//Jogadores
					var Jogadores = []
					var Pontuacao = []

					//Para cada Kill, trabalha os jogadores
					for(x=1;x < Kills.length;x++){
						
						//Crio uma Array que separa por :,killed, e by... assim, acho os jogadores
						separadores = [': ',' killed ',' by']
						var jogadoresPartida = Kills[x].split(new RegExp (separadores.join('|'),'g'),3)
						

						//Verifico se o jogador1 é world
						//Caso seja, removo ponto jogador2
						if(jogadoresPartida[1] != '<world>'){
							//Verifico se ja tem jogador1, 
							var Existe1=Jogadores.indexOf(jogadoresPartida[1])

							//se não, adiciono em jogadores,
							//se sim, adiciono 1 ponto
							if (Existe1 == -1){
								Jogadores.push(jogadoresPartida[1])
								//Verifico se ele se matou; caso sim, nao adiciona pontos
								if(jogadoresPartida[1]!=jogadoresPartida[2]){
									Pontuacao.push(1)
								}else{
									Pontuacao.push(0)
								}
								
							}else{
								if(jogadoresPartida[1]!=jogadoresPartida[2]){
									Pontuacao[Existe1]=Pontuacao[Existe1]+1
								}
								
							}

							//Verifico se tem jogador2
							if(Jogadores.indexOf(jogadoresPartida[2])== -1){
								Jogadores.push(jogadoresPartida[2])
								Pontuacao.push(0)
							}
						}else{
							//Verifico se tem jogador2
							if(Jogadores.indexOf(jogadoresPartida[2])== -1){
								Jogadores.push(jogadoresPartida[2])
								Pontuacao.push(0)
							}
							var IndiceJogador = Jogadores.indexOf(jogadoresPartida[2])
							Pontuacao[IndiceJogador]=Pontuacao[IndiceJogador]-1
						}
						
					}

					

					//Insere no string JsonText
					 JsonText = JsonText+'"game_'+i+'": {\n'+
									'    "total_kills":'+nMorte+',\n'+
									'    "players":['
									//Adiciono Jogadores, separados por "",
									if(Jogadores.length > 1){
										for(z=0;z<Jogadores.length;z++){
											JsonText = JsonText+
											'"'+Jogadores[z]+'"'

											if(z == Jogadores.length-1){
												JsonText=JsonText+'],\n'
											}else{
												JsonText=JsonText+','
											}
										}
									}else{JsonText=JsonText+'],\n'}
									
									
					JsonText = JsonText+'    "kills": {\n'
									if(Jogadores.length>1){
										for(y=0;y<=Jogadores.length-1;y++){
											JsonText=JsonText+
											'      "'+Jogadores[y]+'": '+Pontuacao[y]
											if(y<Jogadores.length-1){
												JsonText=JsonText+',\n'
											}else{
												JsonText=JsonText+
												'\n    }'+
												'\n  }\n\n'
												if(i < GameTxt.length-1){
													JsonText=JsonText+','
												}	
											}
											
										}	
									}else{
										JsonText=JsonText+
											'\n    }'+
											'\n  }\n\n'
										if(i < GameTxt.length-1){
											JsonText=JsonText+','
										}
									}
					//Caso seja o ultimo jogo, crio o Json
					if (i == GameTxt.length-1){
						JsonText=JsonText+'\n}'
						CriarJson()
					}
				}
			})

			//Função que cria Json, chamada após finalizar
			//Redireciona para Index
			function CriarJson(){
				fs.writeFile("./public/games.json", JsonText, function(erro) {
				    if(erro) {
				        throw erro;
				    }else{
				    	res.redirect('/index')
				    }
				}); 
			}

		}
	}
	//exporta para ser chamado
	return Parser
}
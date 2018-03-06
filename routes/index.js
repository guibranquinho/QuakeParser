module.exports = function(app){
	//Importo os controladores
	var Index = app.controllers.index
	var Parser= app.controllers.readgamelog

	//Chamo a leitura do game, gera .json
	//Depois de gerar, chama index
	app.route('/')
		.get(Parser.TrataLog)

	app.route('/index')
		.get(Index.Index)
<<<<<<< HEAD
}
=======
}
>>>>>>> eaaa7904fa4a88456bde17481b4c2cec9922662b

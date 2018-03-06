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
		.post(Parser.UploadFile)
}
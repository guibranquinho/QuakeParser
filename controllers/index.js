module.exports = function(app){

	//Exporta o Parser, que pode ser chamado
	var Index = {
		Index:function(req,res){
			res.render('index')
		}
	}
	return Index
}
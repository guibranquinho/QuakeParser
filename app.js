var		load 		= require('express-load'),
		express 	= require('express'),
		path        = require('path');
var 	app 		= express();

//Declarar pasta public
app.use(express.static(path.join(__dirname, 'public')));

//Declara o engine, e view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/*Faz o carregamento de controladores
 *Faz o carregamento de rotas para APP*/
load('controllers')
	.then('routes')
	.into(app);


//Inicia servidor express
app.listen(3000, function() {
    console.log('Servidor iniciado na porta 3000');
});
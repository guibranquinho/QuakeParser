//Leitura do arquivo Json com Angular
var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope','$http', function($scope,$http) {
	$scope.json;

	var baseUrl = '/games.json';
	$http.get(baseUrl).then(function(response) {
	$scope.json = response.data;


	}, function(err) {
	console.log(err);
	});

}]);

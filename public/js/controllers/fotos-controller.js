angular.module('alurapic').controller('FotosController' , function($scope, $http){ //agora estou usando o modulo alurapic, e pedindo para criar um controller 'FotosConroller' (letra maiuscula sempre) e uma funcao q o define
//uso o $scope dentro da funcao pq senao, não será possível acessar os elementos dentro da funcao, o js nao permite fica tudo em vegas

	$scope.fotos =[
		// {
		// 	titulo: 'Bridge1',
		// 	url: 'http://lorempixel.com/output/city-q-c-640-480-9.jpg'
		// },
		// {
		// 	titulo: 'Bridge2',
		// 	url: 'http://lorempixel.com/output/city-q-c-640-480-9.jpg'
		// },
		// {
		// 	titulo: 'Bridge3',
		// 	url: 'http://lorempixel.com/output/city-q-c-640-480-9.jpg'
		// }
	];

	$http.get('/v1/fotos')
	.success(function(retorno){
		console.log(retorno)
		$scope.fotos= retorno;
	})
	.error(function(erro){
		console.log(erro);
	});

	// promise.then(function(retorno){
	// 	$scope.fotos = retorno.data;
	// }).catch(function(error){
	// 	console.log(error);
	// });

}); 
angular.module('alurapic').controller('FotosController' , function($scope, $http){ //agora estou usando o modulo alurapic, e pedindo para criar um controller 'FotosConroller' (letra maiuscula sempre) e uma funcao q o define
//uso o $scope dentro da funcao pq senao, não será possível acessar os elementos dentro da funcao, o js nao permite fica tudo em vegas

	$scope.fotos =[];
	$scope.filtro='';
	$scope.mensagem = '';

	$http.get('/v1/fotos')
	.success(function(retorno){
		console.log(retorno)
		$scope.fotos= retorno;
	})
	.error(function(erro){
		console.log(erro);
	});

	$scope.remover = function(foto){
		//remove a foto
		$http.delete('v1/fotos/' + foto._id)
		.success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto' + foto.titulo + ' foi removida com sucesso';
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;
		});
	};

}); 
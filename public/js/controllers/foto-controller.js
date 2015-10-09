angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams){
	$scope.foto = {};
	$scope.mensagem = '';

	// var recursoFoto = $resource('/v1/fotos/:fotoId' , null , {
	// 	update:{
	// 		method:'PUT'
	// 	}
	// });

	if($routeParams.fotoId){
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto=foto;
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = 'Nào foi possível obter a foto';
		});
	}

	$scope.submeter = function(){

		if($scope.formulario.$valid){

			if($scope.foto._id){//se minha foto tiver um id (já tiver sido cadastrada eu altero aqui)

				recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
					$scope.mensagem = 'A foto foi alterada com sucesso';
				},function(erro){
					console.log(erro);
					$scope.mensagem = 'Não foi possível alterar a foto';
				});
				// $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				// .success(function(){
				// 	$scope.mensagem = 'A foto foi alterada com sucesso';
				// })
				// error(function(erro){
				// 	console.log(erro);
				// 	$scope.mensagem = 'Não foi possível alterar a foto';
				// })
			}else{//senao eu cadastro

				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.foto={}; //limpa a foto q deveria aparecer no lado direito
					$scope.mensagem = 'Foto cadastrada com sucesso';
				})
				.error(function(){
					$scope.mensagem = 'Não foi possível incluir a foto';
					console.log(error)
				})

			}
			
		}
		
	};


});

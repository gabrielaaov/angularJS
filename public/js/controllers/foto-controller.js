angular.module('alurapic').controller('FotoController', function($scope, $http){
	$scope.foto = {};
	$scope.mensagem = '';

	$scope.submeter = function(){

		if($scope.formulario.$valid){
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
		
	};


});

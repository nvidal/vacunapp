app.controller('CentroCtrl', ['$scope', '$resource',
	function($scope, $resource){
		$scope.deptoSelect = "Montevideo";
		$scope.deptos = ["Montevideo", "Canelones", "Paris"];

		Centros.query(function(cents){
			$scope.centros = cents;
		});

		$scope.listar = function(){
			alert('Capo de la vida');
		}

		$scope.verCentro = function(){

			$scope.centroSelect = "";
		}


	}]);
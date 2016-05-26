app.controller('CentroCtrl', ['$scope', '$resource',
	function($scope, $resource){
		$scope.depto;

		Centros.query(function(cents){
			$scope.centros = cents;
		});

		$scope.verCentro = function(){

			$scope.centroSelect = ;
		}


	}]);
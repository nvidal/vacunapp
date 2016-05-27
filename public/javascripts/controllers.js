app.controller('InicioCtrl', ['$scope', '$resource',
	function($scope, $resource){
		$scope.deptoSelect = "Montevideo";
		$scope.deptos = ["Montevideo", "Canelones", "Paris"];

	}]);

app.controller('CentrosCtrl', ['$scope', '$resource', '$routeParams',
	function($scope, $resource, $routeParams){

		var Centros = $resource('/api/centros/depto/:depto');
		Centros.query({ depto : $routeParams.depto }, function(cents){
			$scope.centros = cents;
		});


	}]);

app.controller('VerCentroCtrl', ['$scope', '$resource', '$routeParams',
	function($scope, $resource, $routeParams){

		var Centros = $resource('/api/centros/:id');
		Centros.query({ depto : $routeParams.id }, function(cent){
			$scope.centro = cent;
		});


	}]);

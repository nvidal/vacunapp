app = angular.module('VacunApp', ['ngRoute', 'ngResource', 'angularUtils.directives.dirPagination']);

// Configuracion de la rutas de la app.
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/inicio', {
			templateUrl : 'partials/inicio.html',
			controller : 'InicioCtrl'
		})
		.when('/centros/:depto', {
			templateUrl : 'partials/centros.html',
			controller : 'CentrosCtrl'
		})
		.when('/verCentro/:id', {
			templateUrl : 'partials/verCentro.html',
			controller : 'VerCentroCtrl'
		})
		.otherwise({
			redirectTo : '/inicio'
		});
}]);

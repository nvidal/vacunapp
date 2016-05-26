app = angular.module('VacunApp', ['ngRoute', 'ngResource', 'angularUtils.directives.dirPagination']);

// Configuracion de la rutas de la app.
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/inicio', {
			templateUrl : 'partials/inicio.html',
			controller : 'CentroCtrl'
		})
		.when('/centros/', {
			templateUrl : 'partials/centros.html',
			controller : 'CentroCtrl'
		})
		.when('/centro/:id', {
			templateUrl : 'partials/verCentro.html',
			controller : 'CentroCtrl'
		})
		.otherwise({
			redirectTo : '/inicio'
		});
}]);

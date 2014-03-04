'use strict';

/* App Module */

var visualizationsApp = angular.module('visualizationsApp', [
	'ngRoute',
	'visualizationControllers'
]);

visualizationsApp.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/view1.html',
				controller: 'mainController'
			}).
			when('/next', {
				templateUrl: 'partials/view2.html',
				controller: 'fakeController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);
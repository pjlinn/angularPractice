'use strict';

/*
  TO-DO
  -----
1. Update the controllers to mimic the angular phonecat tutorial layout
2. Write a few tests to check real simple things
3. Don't hard code the data, pull it from another source
  3a. Use a funciton to create designs and calculate totals dynamically

*/


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myAppControllers'
]);

myApp.config(['$routeProvider', 
	function($routeProvider) {
  	  $routeProvider.
  	  	when('/view1', {
  	  		templateUrl: 'partials/partial1.html', 
  	  		controller: 'costVsPerformanceCtrl'
  	  	}).
  	  when('/view2', {
  	  	templateUrl: 'partials/partial2.html', 
  	  	controller: 'costVsReliabilityCtrl'
  	  }).
      when('/view3', {
        templateUrl: 'partials/partial3.html',
        controller: 'reliabilityVsPerformanceCtrl'
      }).
  	  otherwise({
  	  	redirectTo: '/view1'
  	  });
}]);

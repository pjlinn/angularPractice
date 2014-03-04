'use strict';

/* Controllers */

var visualizationControllers = angular.module('visualizationControllers', []);

visualizationControllers.controller('mainController', ['$scope', function($scope) {
	$scope.information = [];

	$scope.chartTypes = [
		{ typeName: 'PieChart', typeValue: 'PieChart'},
		{ typeName: 'BarChart', typeValue: 'BarChart'},
		{ typeName: 'Scatterchart', typeValue: 'Scatterchart'},
		{ typeName: 'LineChart', typeValue: 'LineChart'}
	];

	$scope.chartTypes= $scope.chartTypes[0];
}]);
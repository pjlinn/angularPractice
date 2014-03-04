'use strict';

/* Controllers */

// load the visualization API and the linechart package.
google.load('visualization', '1', {
	packages:['corechart']
});
// Once the package is loaded, we need to initialize our Angular app
google.setOnLoadCallback(function() {
  angular.bootstrap(document.body, ['myApp']);
});

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 
  	function($scope) {
      var data = google.visualization.arrayToDataTable([
        ['Cost', 'Performance', 'SystemDesign'],
        [ 2000,      23,    'Design 1'],
        [ 1928,      25,    'Design 2'],
        [ 1900,      28,    'Design 3'],
        [ 1828,      30,    'Design 4'],
        [ 1998,      20,    'Design 5'],
        [ 1970,      23,    'Design 6'],
        [ 1898,      25,    'Design 7'],
        [ 1978,      23,    'Design 8'],
        [ 1878,      28,    'Design 9']
      ]);

      data.setColumnProperty(2, 'role', 'tooltip');

      var options = {
        title: 'Cost vs. Performance Comparison',
        hAxis: {title: 'Cost($)', minValue: 1500, maxValue: 2100},
        vAxis: {title: 'Performance', minValue: 18, maxValue: 31},
        legend: 'none'
      };

      var chart = {};

      chart.data = data;
      chart.options = options;
      // This is for the select dropdown box
      $scope.chartTypes = [ 
      	{typeName: 'ScatterPlot', typeValue: '1'},
      ];
      // Sets a default value for the select box
      $scope.chartType = $scope.chartTypes[0];
      // ng-change expression
      $scope.selectType = function(type) {
      	$scope.chart.type = type.typeValue;
      }

      chart.type = $scope.chartTypes[0].typeValue;

      $scope.chart = chart;
  	}	
  ])
	.controller('MyCtrl2', ['$scope', 
    function($scope) {
      var data = google.visualization.arrayToDataTable([
        ['Cost', 'Reliability', 'SystemDesign'],
        [ 2000,      .448,    'Design 1'],
        [ 1928,      .504,    'Design 2'],
        [ 1900,      .576,    'Design 3'],
        [ 1828,      .648,    'Design 4'],
        [ 1998,      .441,    'Design 5'],
        [ 1970,      .504,    'Design 6'],
        [ 1898,      .567,    'Design 7'],
        [ 1978,      .567,    'Design 8'],
        [ 1878,      .729,    'Design 9']
      ]);

      data.setColumnProperty(2, 'role', 'tooltip');

      var options = {
        title: 'Cost Vs. Reliability Comparison',
        hAxis: {title: 'Cost($)', minValue: 1500, maxValue: 2100},
        vAxis: {title: 'Reliability', minValue: 0, maxValue: 1},
        legend : 'none'
      };

      var chart = {};

      chart.data = data;
      chart.options = options;

      $scope.chartTypes = [
        {typeName: 'ScatterPlot', typeValue: '1'},
      ];

      $scope.chartType = $scope.chartTypes[0];

      $scope.selectType = function(type) {
        $scope.chart.type = type.typeValue;
      }

      chart.type = $scope.chartTypes[0].typeValue;

      $scope.chart = chart;

  	}
  ])
  .controller('MyCtrl3', ['$scope', 
    function($scope) {
      var data = google.visualization.arrayToDataTable([
        ['Performance', 'Reliability', 'SystemDesign'],
        [ 23,      .448,    'Design 1'],
        [ 25,      .504,    'Design 2'],
        [ 28,      .576,    'Design 3'],
        [ 30,      .648,    'Design 4'],
        [ 20,      .441,    'Design 5'],
        [ 23,      .504,    'Design 6'],
        [ 25,      .567,    'Design 7'],
        [ 23,      .567,    'Design 8'],
        [ 28,      .729,    'Design 9']        
      ]);

      data.setColumnProperty(2, 'role', 'tooltip');

      var options = {
        title: 'Performance Vs. Reliability Comparison',
        hAxis: {title: 'Performance', minValue: 18, maxValue: 31},
        vAxis: {title: 'Reliability', minValue: 0, maxValue: 1},
        legend : 'none'
      };

      var chart = {};

      chart.data = data;
      chart.options = options;

      $scope.chartTypes = [
        {typeName: 'ScatterPlot', typeValue: '1'},
      ];

      $scope.chartType = $scope.chartTypes[0];

      $scope.selectType = function(type) {
        $scope.chart.type = type.typeValue;
      }

      chart.type = $scope.chartTypes[0].typeValue;

      $scope.chart = chart;
    }
  ]);
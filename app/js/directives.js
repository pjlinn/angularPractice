'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function($scope, elm, attrs) {
      elm.text(version);
    };
  }
])
  .directive('gChart', function() {
  	return {
  		restrict: 'A',
  		link: function($scope, elm, attrs) {
  			$scope.$watch('chart', function() {
  				var type = $scope.chart.type;
  				var chart = '';

  				if (type == '1') {
  					chart = new google.visualization.ScatterChart(elm[0]);
  				}

  				chart.draw($scope.chart.data, $scope.chart.options);
  			}, true);
  		}
  	}
  });

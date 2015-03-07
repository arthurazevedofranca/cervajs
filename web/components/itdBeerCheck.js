'use strict';

angular.module('cervasjs').directive('itdBeerCheck', function (){
	return {
		restrict: 'E',
		scope: { 'cerva': '=' },
		templateUrl: 'components/itdBeerCheck.html',
		controller: 'itdBeerCheckCtrl',
		link: function (scope, $elem, $attr) {
		}
	};
})
.controller('itdBeerCheckCtrl', function ($scope) {
	$scope.isvalidCerva = function () {
		return $scope.cerva.cornPercent < 30;
	};
});

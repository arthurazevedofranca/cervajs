'use strict';

angular.module('cervasjs').directive('itdBeerCheck', function (){
	return {
		restrict: 'E',
		scope: { 'cerva': '=' },
		templateUrl: 'app/components/itdBeerCheck.html',
		controller: 'itdBeerCheckCtrl'
	};
})
.controller('itdBeerCheckCtrl', function ($scope, cervaHelper) {
	$scope.isValid = cervaHelper.isValid($scope.cerva);
});

'use strict';

angular.module('cervasjs')
.controller('cervasCtrl', function ($scope) {
	$scope.test = true;
})
.controller('cervasListCtrl', function ($scope, cervasService, logError) {
	cervasService.list().then(function (cervasData) {
		$scope.cervas = cervasData;
	}).catch(logError);
})
.controller('cervasAddCtrl', function ($scope, $state, cervasService, logError) {
	$scope.cerva={};
	$scope.save = function () {
		cervasService.add($scope.cerva)
			.then(function success(){
				$state.go('^.list');
			})
			.catch(logError);
	};
});

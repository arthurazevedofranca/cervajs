'use strict';

angular.module('cervasjs')

.controller('cervasListCtrl', function ($scope, Cerva, logError) {
	Cerva.list().then(function (cervas) {
		$scope.cervas = cervas;
	}).catch(logError);
})

.controller('cervasAddCtrl', function ($scope, $state, Cerva, logError) {
	$scope.cerva = {};
	$scope.save = function () {
		Cerva.create($scope.cerva)
			.then(function () { $state.go('^.list'); })
			.catch(logError);
	};
});

'use strict';

angular.module('cervasjs')

.controller('cervasListCtrl', function ($scope, Cerva, logError, $window,$state) {
	Cerva.list().then(function (cervas) {
		$scope.cervas = cervas;
	}).catch(logError);

	$scope.remove = function(cervaId){
		 var resposta = $window.confirm('Gostaria de excluir essa cerva?');

		 if(resposta)
				Cerva.delete(cervaId).then(function(){
					$state.go('^.list', {}, { reload: true });
				});


	};
})

.controller('cervasAddCtrl', function ($scope, $state, Cerva, logError) {
	$scope.cerva = {};
	$scope.save = function () {
		Cerva.create($scope.cerva)
			.then(function () { $state.go('^.list'); })
			.catch(logError);
	};
})

.controller('cervasEditCtrl', function ($scope, $state, $stateParams, Cerva, logError) {
	Cerva.get($stateParams.id)
	.then(function (cerva) {
		$scope.cerva = cerva;
	});
	$scope.save = function () {
		Cerva.update($scope.cerva)
			.then(function () { $state.go('^.list'); })
			.catch(logError);
	};
});

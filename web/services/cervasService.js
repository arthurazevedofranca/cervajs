'use strict';

angular.module('cervasjs')
.service('cervasService', function($http) {
	this.list = function (queryString) {
		return $http.get('/app/cervas?q=' + queryString).then(function (response) {
			return response.data;
		});
	};
	this.add = function (cerva) {
		return $http.post('/app/cervas', cerva).then(function (response) {
			return response.data;
		});
	};
	this.update = function (cerva) {
		return $http.put('/app/cervas/' + cerva.id, cerva).then(function (response) {
			return response.data;
		});
	};
});

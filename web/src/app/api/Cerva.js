'use strict';

angular.module('cervasjs')
.service('Cerva', function($http, configs) {
	this.list = function (queryString) {
		queryString = queryString || '';
		return $http.get(configs.basePath + '/cervas?q=' + queryString).then(function (response) {
			return response.data;
		});
	};
	this.create = function (cerva) {
		return $http.post(configs.basePath + '/cervas', cerva).then(function (response) {
			return response.data;
		});
	};
	this.update = function (cerva) {
		return $http.put(configs.basePath + '/cervas/' + cerva.id, cerva).then(function (response) {
			return response.data;
		});
	};

	this.delete = function(id){
		return $http.delete(configs.basePath +'/cervas/'+id).then(function(response){
			return response.data;
		});
	};
});

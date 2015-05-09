'use strict';

angular.module('cervasjs')
.service('Cerva', function($http, configs, _ ) {

	var fetchData = function (response) {
		return response.data;
	};
	var workAroundId = function (data) {
		data.id = data._id ;
		delete data._id;
		return data;
	};
	this.list = function (queryString) {
		queryString = queryString || '';
		return $http.get(configs.basePath + '/cervas?q=' + queryString).then(fetchData)
		.then(function(data){
			return _(data).map(workAroundId);

		});
	};
	this.create = function (cerva) {
		return $http.post(configs.basePath + '/cervas', cerva).then(fetchData);
	};
	this.update = function (cerva) {
		return $http.put(configs.basePath + '/cervas/' + cerva.id, cerva).then(fetchData);
	};
	this.get = function (cervaId) {
		return $http.get(configs.basePath + '/cervas/' + cervaId)
			.then(fetchData).then(workAroundId);
	};
	this.delete = function(id){
		return $http.delete(configs.basePath +'/cervas/'+id).then(fetchData);
	};
});

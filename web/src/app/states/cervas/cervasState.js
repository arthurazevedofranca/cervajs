'use strict';

angular.module('cervasjs').config(function ($stateProvider) {
	$stateProvider.state('cervas', {
		abstract: true,
		url: '/cervas',
		template: '<div ui-view></div>'
	});
	$stateProvider.state('cervas.list', {
		url: '/list',
		templateUrl: 'app/states/cervas/list.html',
		controller: 'cervasListCtrl'
	});
	$stateProvider.state('cervas.add', {
		url: '/add',
		templateUrl: 'app/states/cervas/edit.html',
		controller: 'cervasAddCtrl'
	});
	$stateProvider.state('cervas.edit', {
		url: '/edit/:id',
		templateUrl: 'app/states/cervas/edit.html',
		controller: 'cervasEditCtrl'
	});
});

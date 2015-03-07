'use strict';

angular.module('cervasjs').config(function ($stateProvider) {
	$stateProvider.state('cervas', {
		abstract: true,
		url: '/cervas',
		template: '<div ui-view></div>',
		controller: 'cervasCtrl'
	});
	$stateProvider.state('cervas.list', {
		url: '/list',
		templateUrl: '/cervas/list.html',
		controller: 'cervasListCtrl'
	});
	$stateProvider.state('cervas.add', {
		url: '/add',
		templateUrl: '/cervas/edit.html',
		controller: 'cervasAddCtrl'
	});
});

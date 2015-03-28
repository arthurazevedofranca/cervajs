'use strict';

angular.module('cervasjs', ['ui.router', 'ngResource'])
.constant('_', window._)
.constant('_s', window.s)
.config(function(_, _s) {
	_.mixin(_s.exports());
})
.run(function($rootScope, $log) {
	$rootScope.$on('$stateChangeError', function () {
		$log.error('$stateChangeError', arguments);
	});
});

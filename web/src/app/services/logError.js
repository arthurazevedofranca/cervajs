'use strict';

angular.module('cervasjs')
.factory('logError', function ($log) {
	return function (error) {
		$log.error('error', error);
		alert(error.message);
	};
});

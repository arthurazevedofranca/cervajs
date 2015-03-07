'use strict';

angular.module('cervasjs')
.factory('logError', function () {
	return function (error) {
		console.log('error', error);
		alert(error.message);
	};
});

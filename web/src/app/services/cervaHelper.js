'use strict';

angular.module('cervasjs').service('cervaHelper', function (_) {
	this.isValid = function (cerva) {
		if (!_(cerva).has('cornPercent'))
			throw new Error('cerva.invalid');

		return cerva.cornPercent < 30;
	};
});


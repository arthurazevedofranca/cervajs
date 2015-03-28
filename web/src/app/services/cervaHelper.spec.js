'use strict';

describe('cervaHelper', function() {

	var cervaHelper;
	beforeEach(inject(function(_cervaHelper_) {
		cervaHelper = _cervaHelper_;
	}));

	describe('isValid', function() {

		it ('should is valid', function () {
			var heineken = { cornPercent: 0 };
			expect(cervaHelper.isValid(heineken)).toBeTruthy();
		});

		it ('not should is valid', function () {
			var skol = { cornPercent: 40 };
			expect(cervaHelper.isValid(skol)).toBeFalsy();
		});

		it ('itaipava?', function () {
			var itaipava = {};
			expect(function() { 
				cervaHelper.isValid(itaipava); 
			}).toThrow();
		});
	});
});

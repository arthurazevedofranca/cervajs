'use strict';

describe('Cerva', function () {

	var Cerva, $http, $q, $rootScope, configs;

	beforeEach(inject(function(_$http_, _Cerva_, _$q_, _$rootScope_, _configs_) {
		$http = _$http_;
		Cerva = _Cerva_;
		$q = _$q_;
		$rootScope = _$rootScope_;
		configs = _configs_;
	}));

	it('list-parametros', function () {

		spyOn($http, 'get').and.returnValue($q.when());
		
		Cerva.list();
		expect($http.get).toHaveBeenCalledWith(configs.basePath + '/cervas?q=');

		Cerva.list(null);
		expect($http.get).toHaveBeenCalledWith(configs.basePath + '/cervas?q=');

		var queryString = 'heineken';
		Cerva.list(queryString);
		expect($http.get).toHaveBeenCalledWith(configs.basePath + '/cervas?q=' + queryString);
	});

	it('list-retorno', function (done) {

		var result = { data: {} };
		spyOn($http, 'get').and.returnValue($q.when(result));
		
		Cerva.list('').then(function(data) {
			expect(data).toEqual(result.data);
			done();
		});

		$rootScope.$apply();
	});

});
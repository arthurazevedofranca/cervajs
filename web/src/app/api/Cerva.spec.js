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

		var obj =[{_id:'1'},{_id:'2'}];
		var response = { data:obj};

		spyOn($http, 'get').and.returnValue($q.when(response));

		Cerva.list('').then(function(data) {

			expect(data).toEqual([{id:'1'},{id:'2'}]);
			done();
		});

		$rootScope.$apply();
	});

	it('create-parametro', function () {

		var cerva = { nome:'heineken' ,cornPercent:0 };
		spyOn($http, 'post').and.returnValue($q.when());
		Cerva.create(cerva);
		expect($http.post).toHaveBeenCalledWith(configs.basePath + '/cervas',cerva);
	});

	it('create-return', function (done) {

		var response = { data: {id:123} };
		spyOn($http, 'post').and.returnValue($q.when(response));
		Cerva.create({}).then(function (data){
			expect(data).toEqual(response.data);
			done();
		});


		$rootScope.$apply();

	});

	it('delete-param', function () {

		spyOn($http,'delete').and.returnValue($q.when());
		var id =2;

		Cerva.delete(id);

		expect($http.delete).toHaveBeenCalledWith(configs.basePath +'/cervas/' + id);
	});

	it('delete-success',function(done){

		var response = {data: {id:1} };
		spyOn($http,'delete').and.returnValue($q.when(response));

		Cerva.delete(response.data.id).then(function(data){
			expect(data).toEqual(response.data);
			done();
		});

		$rootScope.$apply();
	});

	it('delete-fail',function(done){
		spyOn($http, 'delete').and.returnValue($q.reject());

		Cerva.delete(1).catch(function () {
			done();
		});

		$rootScope.$apply();
	});

	it('update-param', function () {
		var cerva = { id: 1};
		spyOn($http,'put').and.returnValue($q.when());

		Cerva.update(cerva);

		expect($http.put).toHaveBeenCalledWith(configs.basePath +'/cervas/' + cerva.id, cerva);
	});

	it('update-success', function(done) {
		var cerva = { id: 1, nome: 'germanica'};
		var response = {data: cerva};
		spyOn($http,'put').and.returnValue($q.when(response));

		Cerva.update(cerva).then(function(data) {
			expect(data).toEqual(response.data);
			done();
		});

		$rootScope.$apply();
	});

	it('update-fail',function(done){
		var cerva = { id: 1, nome: 'germanica'};
		spyOn($http, 'put').and.returnValue($q.reject());

		Cerva.update(cerva).catch(function () {
			done();
		});

		$rootScope.$apply();
	});

	it('get-param', function () {
		var cervaId = 1;
		spyOn($http,'get').and.returnValue($q.when());

		Cerva.get(cervaId);

		expect($http.get).toHaveBeenCalledWith(configs.basePath +'/cervas/' + cervaId);
	});

	it('get-success', function(done) {
		var cerva = {_id: 1, nome: 'germanica'};
		var response = {data: angular.copy(cerva)};
		spyOn($http,'get').and.returnValue($q.when(response));

		Cerva.get(cerva._id).then(function(data) {
			expect(data).toEqual({id: cerva._id, nome: cerva.nome});
			done();
		});

		$rootScope.$apply();
	});

	it('get-fail',function(done){
		var cervaId = 1;
		spyOn($http, 'get').and.returnValue($q.reject());

		Cerva.get(cervaId).catch(function () {
			done();
		});

		$rootScope.$apply();
	});
});

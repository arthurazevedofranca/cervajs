'use strict';

var Cerva = require('../model/Cerva');

var CervaService = function (app) {
	app.get('/app/cervas', function (req, res) {
		Cerva.find().exec().then(function (cervas) {
			res.json(cervas);
		});
	});

	app.get('/app/cervas/:id', function (req, res) {
		Cerva.findById(req.params.id).exec().then(function(cerva) {
			res.json(cerva);
		});
	});

	app.post('/app/cervas', function (req, res) {
		Cerva.create(req.body).then(function(cerva) {
			res.json(cerva);
		});
	});

	app.put('/app/cervas/:id', function (req, res) {
		Cerva.findByIdAndUpdate(req.params.id, req.body).exec().then(function(cerva) {
			res.json(cerva);
		});
	});

	app.delete('/app/cervas/:id', function (req, res) {
		Cerva.findByIdAndRemove(req.params.id).exec().then(function () {
			res.json({ status: 'OK' });
		});
	});
};

module.exports = CervaService;

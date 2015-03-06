'use strict';

let co = require('co');

module.exports = function (app, serviceRef) {
	let service = new serviceRef();
	let servicePath = '/app' + serviceRef.resource();
	let servicePathId = servicePath + '/:id';

	app.get(servicePathId, function (req, res, next) {
		let action = co.wrap(service.findOne);
		action(req).then(function (data) { res.json(data); });
	});

	app.get(servicePath, function (req, res, next) {
		let action = co.wrap(service.find);
		action(req).then(function (data) { res.json(data); });
	});

	app.post(servicePath, function (req, res, next) {
		let action = co.wrap(service.post);
		action(req).then(function (data) { res.json(data); });
	});

	app.put(servicePathId, function (req, res, next) {
		let action = co.wrap(service.put);
		action(req).then(function (data) { res.json(data); });
	});

	app.delete(servicePathId, function (req, res, next) {
		let action = co.wrap(service.delete);
		action(req).then(function (data) { res.json(data); });
	});
};

'use strict';

let requireDir  = require('require-dir');
let registerService = require('./registerService')

module.exports = function (app) {
	let services = requireDir('../rest');
	for (var serviceKey in services) {
		registerService(app, services[serviceKey]);
	}
};
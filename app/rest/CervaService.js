'use strict';

let _ = require('underscore');
let Cerva = require('../models/Cerva');

class CervaService {
	static resource() {
		return '/cervas';
	}
	constructor() {
		this.findOne = function *(req) {
			return yield Cerva.findById(req.params.id);
		};
		
		this.find = function *(req) {
			return yield Cerva.find();
		};

		this.post = function *(req) {
			let cerva = new Cerva(req.body);
			return yield cerva.save();
		};

		this.put = function *(req, res) {
			let cerva = yield Cerva.findById(req.params.id);
			cerva.merge(req.body);
			return yield cerva.save();
		};

		this.delete = function *(req, res) {
			yield Cerva.remove({ _id: req.params.id });
			return { status: 'OK' };
		};
	}
}

module.exports = CervaService;

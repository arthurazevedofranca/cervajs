'use strict';

class Connection {
	constructor () {
		let Mongorito = require('mongorito');
		Mongorito.connect('mongodb://localhost/cervajs');
	}
}

module.exports = Connection

'use strict';

class Connection {
	constructor () {
		let Mongorito = require('mongorito');
		Mongorito.connect('localhost/cervajs');
	}
}

module.exports = Connection

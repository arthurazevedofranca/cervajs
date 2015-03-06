'use strict';

let mongorito = require('mongorito');
let _ = require('underscore');

class BaseModel extends mongorito.Model {
	merge(data) {
		_(this.attributes).extend(data);
	}
}

module.exports = BaseModel;

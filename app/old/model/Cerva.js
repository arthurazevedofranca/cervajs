var mongoose = require('mongoose');

var Cerva = mongoose.model('Cerva', {
	name: { type: 'String', required: true },
	cornPercent: Number,
	ricePercent: Number,
	originCounty: String
});

module.exports = Cerva;

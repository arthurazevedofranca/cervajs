
var Cerva = require('../model/Cerva.js');

module.exports = function (app) {

	app.get('/app/cervas', function (req, res) {
		Cerva.find().exec().then(function(data) {
			res.json(data);
		});
	});

	app.post('/app/cervas', function (req, res) {
		var successCerva = function (data) { res.json(data); };
		Cerva.create(req.body).then(successCerva);
	});
};
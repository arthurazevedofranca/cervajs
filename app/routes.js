
module.exports = function (app) {
	require('./services/CervaService.js')(app);

	app.get('/', function(req, res) {
	  res.json({ name: 'cerva' });
	});

	app.use(function (req, res) {
		
	});
};

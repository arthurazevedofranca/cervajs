
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../web'))
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

require('./db.js')();
require('./routes.js')(app);

app.listen(3000);

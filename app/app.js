'use strict';

let express = require('express');
let app = express();

let bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../web'))
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

require('./connection')();
require('./routes')(app);

app.listen(3000);

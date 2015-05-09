'use strict';

let express = require('express');
let app = express();

let bodyParser = require('body-parser')

app.all('*', function(req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    if ('OPTIONS' === req.method) return res.sendStatus(200);

    next();
});

app.use(express.static(__dirname + '/../web'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./connection')();
require('./routes')(app);

app.listen(8082);

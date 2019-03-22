var express = require('express');
var appRoutes = require('./router/appRoutes');
var app = express();
var bodyParser = require('body-parser');
var port = 8080;
var mongoose = require ('mongoose');
var cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/meanDb',{ useNewUrlParser: true } );

app.use(cors());
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', appRoutes);

app.listen(port, function (err) {
    console.log("Running server on", port);
});  
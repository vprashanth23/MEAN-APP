var express = require('express');
//var mongoose = require('mongoose');
//var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

// mongoose.connect('', options);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));


// parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

// Static files
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/node_modules'));



app.get('/',function (req,res) {
    console.log("Hello");
});

app.listen(9001);
console.log("Im listening on port 3000");
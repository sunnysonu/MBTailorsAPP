var express = require("express");
var app = express();
var mongoose = require("mongoose");

var userController = require('./api/user.rest');

var port = 3000;

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

app.listen(port);

userController(app);

console.log("SERVER STARTED....");
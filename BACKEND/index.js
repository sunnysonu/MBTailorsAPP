var express = require("express");
var app = express();
var mongoose = require("mongoose");

var userController = require('./api/user.rest');
var transactionController = require("./api/transaction.rest");

var port = 3000;

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

app.listen(port);

userController(app);
transactionController(app);

console.log("SERVER STARTED....");
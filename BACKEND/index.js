var express = require("express");
var app = express();
var mongoose = require("mongoose");

var userController = require('./api/user.rest');
var transactionController = require("./api/transaction.rest");
var garmetController = require("./api/garmet.rest");
var textileController = require("./api/textile.rest");
var orderController = require("./api/order.rest");
var employeeController = require("./api/employee.rest");




var port = 3000;

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

app.listen(port);

userController(app);
transactionController(app);
garmetController(app);
textileController(app);
orderController(app);
employeeController(app);


console.log("SERVER STARTED....");
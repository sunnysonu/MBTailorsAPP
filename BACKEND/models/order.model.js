var mongoose = require("mongoose");
var schema = mongoose.Schema;

var order = new schema({
    userId : {
        type : String,
        required : true
    },

    employeeIds : {
        type : [Object],
    },

    transactionIds : {
        type : [String],
    },

    garmets : {
        type : [Object]
    },

    textile : {
        type : [Object]
    },

    orderedTime : {
        type : Date,
        default : Date.now,
    },

    status : {
        type : String,
        enum : ["pending", "ready", "delivered"],
        default : "pending",
        required : true
    },

    balance : {
        type : Number,
        required : true
    },

    deliveredTime : {
        type : Date
    }
});

var order = mongoose.model("order", order);
module.exports = order;
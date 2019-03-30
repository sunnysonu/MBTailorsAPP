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
        type : [Object],
        required : true
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
        enum : ["pending", "ready", "delivered"]
    },

    balance : {
        type : Number,
    }
});

var order = mongoose.model("order", order);
module.exports = order;
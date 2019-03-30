var mongoose = require("mongoose");
var schema = mongoose.Schema;

var transaction = new schema({
    amount : {
        type : Number,
        required : true
    },

    transactionType : {
        type : String,
        enum : ["debited", "credited"],
        required : true
    },

    description : {
        type : String,
    },

    time : {
        type : Date,
        default : Date.now
    }
})

var transaction = mongoose.model("transaction", transaction);
module.exports = transaction;
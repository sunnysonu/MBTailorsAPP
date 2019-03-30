var mongoose = require("mongoose");
var schema = mongoose.Schema;

var employee = new schema({
    name : {
        type : String,
        required : true
    },

    status : {
        type : String,
        emun : ["active", "inactive"],
        required : true
    },

    transactionids : {
        type : [String],
    },

    joinedDate : {
        type : Date,
        default : Date.now,
    },

    resignedDate : {
        type : Date,
        default : null,
    },
})
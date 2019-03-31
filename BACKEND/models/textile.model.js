var mongoose = require("mongoose");
var schema = mongoose.Schema;

var textile = new schema({
    brandName : {
        type : String,
        required : true
    },

    quantityAvailable : {
        type : Number,
        required : true
    },

    price : {
        type : Number,
        required : true
    }
});

var textile = mongoose.model("textile", textile);
module.exports = textile;
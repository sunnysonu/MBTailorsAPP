var mongoose = require("mongoose");
var schema = mongoose.Schema;

var garmet = new schema({
    name : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    }
})

var garmet = mongoose.model("garmet", garmet);
module.exports = garmet;
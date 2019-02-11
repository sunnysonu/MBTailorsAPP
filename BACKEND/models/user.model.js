var mongoose = require("mongoose");
var schema = mongoose.Schema;


var user = new schema({
    userName : {
        type : String, 
        required : true
    },

    contactNumber : {
        type : String,
        required : true
    }
})

var user = mongoose.model('user', user);
module.exports = user;
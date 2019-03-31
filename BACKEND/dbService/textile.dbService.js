var textileModel = require("../models/textile.model");

var createNewTextile = (textile) => {
    var textileModelInst = new textileModel(textile);
    return new Promise((resolve, reject) => {
        textileModelInst.save((err, res) => {
            if(!err) {
                return resolve(res);
            } else {
                return reject(err);
            }
        });
    });
} 

var getTextile = () => {
    return new Promise((resolve, reject) => {
        textileModel.find().then((textile) => {
            return resolve(textile);
        })
    })
}

var getTextileByName = (brandName) => {
    var query = {
        brandName : brandName
    };

    return new Promise((resolve, reject) => {
        textileModel.findOne(query, (err, textile) => {
            if(!err) {
                return resolve(textile);
            } else {
                return reject();
            }
        })
    })
}

var updateTextileById = (id, data) => {
    var query = {
        _id : id
    };
    var updateSet = data;

    return textileModel.findOneAndUpdate(query, updateSet).then((response) => {
        if(response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject();
        }
    })
}

var deleteTextile = (id) => {
    var query = {
        _id : id
    }
    return textileModel.findOneAndDelete(query).then((response) => {
        if(response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject();
        }
    });
}

module.exports = {
    createNewTextile : createNewTextile,
    getTextile : getTextile,
    getTextileByName : getTextileByName,
    updateTextileById : updateTextileById,
    deleteTextile : deleteTextile
}
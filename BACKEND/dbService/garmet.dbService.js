var garmetModel = require("../models/garmet.model");

var createNewGarmet = (garmet) => {
    var garmetModelInst = new garmetModel(garmet);
    return new Promise((resolve, reject) => {
        garmetModelInst.save((err, res) => {
            if(!err) {
                return resolve(res);
            } else {
                return reject(err);
            }
        });
    });
} 

var getGarmets = () => {
    return new Promise((resolve, reject) => {
        garmetModel.find().then((garmets) => {
            return resolve(garmets);
        })
    })
}

var getGarmetByName = (name) => {
    var query = {
        name : name
    };

    return new Promise((resolve, reject) => {
        garmetModel.findOne(query, (err, garmet) => {
            if(!err) {
                return resolve(garmet);
            } else {
                return reject();
            }
        })
    })
}

var updateGarmetById = (id, data) => {
    query = {
        _id : id
    };
    var updateSet = data;

    return garmetModel.findOneAndUpdate(query, updateSet).then((response) => {
        if(response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject();
        }
    })
}

var deleteGarmet = (id) => {
    var query = {
        _id : id
    }
    return garmetModel.findOneAndDelete(query).then((response) => {
        if(response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject();
        }
    })
}

module.exports = {
    createNewGarmet : createNewGarmet,
    getGarmets : getGarmets,
    getGarmetByName : getGarmetByName,
    updateGarmetById : updateGarmetById,
    deleteGarmet : deleteGarmet
}
var userModel = require('../models/user.model');

var createNewUser = (data) => {
    var userModelInst = new userModel(data);
    return new Promise((resolve, reject) => {
        userModelInst.save((err, res) => {
            if(!err) {
                return resolve(res);
            } else {
                return reject(err);
            }
        });
    });
}

var getAllUsers = () => {
    return new Promise((resolve, reject) => {
        userModel.find({}, (err, users) => {
            if(err) {
                return reject(err);
            } else {
                return resolve(users);
            }
        });
    });
}

var getUserByContactNumber = (contactNumber) => {
    var query = {
        contactNumber : contactNumber
    }

    return new Promise((resolve, reject) => {
        userModel.find(query, (err, user) => {
            if(!err) {
                return resolve(user);
            }
            else {
                return resolve([])
            }
        })
    })
}

var updateUserById = (id, data) => {
    var query = {
        _id : id
    };
    var updateSet = data;

    return userModel.findOneAndUpdate(query, updateSet).then((response) => {
        if(response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject();
        }
    })
}

module.exports = {
    createNewUser : createNewUser,
    getUserByContactNumber : getUserByContactNumber,
    getAllUsers : getAllUsers,
    updateUserById : updateUserById
}
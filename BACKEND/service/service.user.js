var userModelService = require('../dbService/user.dbService');

var createNewUser = (req) => {
    var user = {
        userName : req.body.userName,
        contactNumber : req.body.contactNumber
    }
    return userModelService.createNewUser(user).then((response) => {
        return Promise.resolve(response);
    }, (error) => {
        return Promise.reject(error);
    });
}

var getAllUsers = (req) => {
    return userModelService.getAllUsers().then((users) => {
        return users;
    })
}

var getUserByContactNumber = (req) => {
    return userModelService.getUserByContactNumber(req.params.contactNumber).then((user) => {
        if(user) {
            return Promise.resolve(user);
        } else {
            return Promise.reject();
        }
    })
}

module.exports = {
    createNewUser : createNewUser,
    getAllUsers : getAllUsers,
    getUserByContactNumber : getUserByContactNumber
}
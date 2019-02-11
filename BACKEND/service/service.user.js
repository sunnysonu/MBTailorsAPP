var userModelService = require('../dbService/user.dbService');

var createNewUser = (req) => {
    var user = {
        userName : req.body.userName,
        contactNumber : req.body.contactNumber
    }
    return userModelService.getUserByContactNumber(req.body.contactNumber).then((user) => {
        if(user === []) {
            return userModelService.createNewUser(user).then((response) => {
                return Promise.resolve(response);
            }, (error) => {
                return Promise.reject(error);
            });
        } else {
            return Promise.resolve("User record already exists!!");
        }
    })
}

var getAllUsers = (req) => {
    return userModelService.getAllUsers().then((users) => {
        return users;
    })
}

var getUserByContactNumber = (req) => {
    console.log("HERERERERERERERERER");
    return userModelService.getUserByContactNumber(req.params.contactNumber).then((user) => {
        if(user) {
            console.log('SUCCESS!!!!!!!!!!!!!!');
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
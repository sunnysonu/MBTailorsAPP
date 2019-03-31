var employeeModel = require('../models/employee.model');

var createNewEmployee = (data) => {
    var employeeModelInst = new employeeModel(data);
    return new Promise((resolve, reject) => {
        employeeModelInst.save((err, res) => {
            if(!err) {
                return resolve(res);
            } else {
                return reject(err);
            }
        });
    });
}

var getAllEmployees = () => {
    return new Promise((resolve, reject) => {
        employeeModel.find({}, (err, employees) => {
            if(err) {
                return reject(err);
            } else {
                return resolve(employees);
            }
        });
    });
}

var updateEmployeeById = (id, data) => {
    var query = {
        _id : id
    };
    var updateSet = data;

    return employeeModel.findOneAndUpdate(query, updateSet).then((response) => {
        if(response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject();
        }
    })
}

module.exports = {
    createNewEmployee : createNewEmployee,
    getAllEmployees : getAllEmployees,
    updateEmployeeById : updateEmployeeById
}
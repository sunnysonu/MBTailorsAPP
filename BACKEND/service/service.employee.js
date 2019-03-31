var employeeModelService = require('../dbService/employee.dbService');

var createNewEmployee = (req) => {
    var employee = {
        name : req.body.name,
        status : req.body.status,
        transactionids : req.body.transactionids
    };
    return employeeModelService.createNewEmployee(employee).then((response) => {
        return Promise.resolve(response);
    }, (error) => {
        return Promise.reject(error);
    });
}

var getAllEmployees = (req) => {
    return employeeModelService.getAllEmployees().then((employees) => {
        return employees;
    })
}

var updateEmployeeById = (req) => {
    return employeeModelService.updateEmployeeById(req.params.id, req.body).then((employee) => {
        if(employee) {
            return Promise.resolve(employee);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

module.exports = {
    createNewEmployee : createNewEmployee,
    getAllEmployees : getAllEmployees,
    updateEmployeeById : updateEmployeeById
}
var bodyParser = require('body-parser');
var employeeService = require('../service/service.employee');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.post('/mbtailors/employees', (req, res) => {
        return employeeService.createNewEmployee(req).then((response) => {
            if(response){
                res.send(response);
            }
        }, (error) => {
            throw error;
        })
    }),

    app.get('/mbtailors/employees', (req, res) => {
        return employeeService.getAllEmployees(req).then((response) => {
            if(response) {
                res.send(response);
            } 
        }, (error) => {
            throw error;
        })
    }),

    app.put('/mbtailors/employees/:id', (req, res) => {
        return employeeService.updateEmployeeById(req).then((response) => {
            if(response) {
                res.send(response);
            }
        }, (error) => {
            throw error;
        })
    })
}
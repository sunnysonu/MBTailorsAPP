var bodyParser = require('body-parser');
var userService = require('../service/service.user');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.post('/mbtailors/users', (req, res) => {
        return userService.createNewUser(req).then((response) => {
            if(response){
                res.send(response);
            }
        }, (error) => {
            throw error;
        })
    }),

    app.get('/mbtailors/users', (req, res) => {
        return userService.getAllUsers(req).then((response) => {
            if(response) {
                res.send(response);
            } 
        }, (error) => {
            throw error;
        })
    })

    app.get('mbtailors/users/:contactNumber', (req, res) => {
        console.log("ASDFGHJKL");
        return userService.getUserByContactNumber(req).then((response) => {
            if(response) {
                res.send(response);
            }
        }, (error) => {
            throw error;
        })
    })
}
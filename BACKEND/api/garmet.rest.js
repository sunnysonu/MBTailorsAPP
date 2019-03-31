var bodyParser = require('body-parser');
var garmetService = require("../service/service.garmet");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.post("/mbtailors/garmets", (req, res) => {
        return garmetService.createNewGarmet(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    }),

    app.get("/mbtailors/garmets", (req, res) => {
        return garmetService.getGarmets(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    }),

    app.get("/mbtailors/garmets/:name", (req, res) => {
        return garmetService.getGarmetByName(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    }),

    app.put("/mbtailors/garmets/:id", (req, res) => {
        return garmetService.updateGarmetById(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    }),

    app.delete("/mbtailors/garmets/:id", (req, res) => {
        return garmetService.deleteGarmet(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    })
}
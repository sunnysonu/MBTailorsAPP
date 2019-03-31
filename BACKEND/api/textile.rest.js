var bodyParser = require('body-parser');
var textileService = require("../service/service.textile");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.post("/mbtailors/textile", (req, res) => {
        return textileService.createNewTextile(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    }),

    app.get("/mbtailors/textile", (req, res) => {
        return textileService.getTextile(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    }),

    app.get("/mbtailors/textile/:brandName", (req, res) => {
        return textileService.getTextileByName(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    }),

    app.put("/mbtailors/textile/:id", (req, res) => {
        return textileService.updateTextileById(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    }),

    app.delete("/mbtailors/textile/:id", (req, res) => {
        return textileService.deleteTextile(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    })
}
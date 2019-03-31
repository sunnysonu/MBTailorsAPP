var bodyParser = require('body-parser');
var orderService = require("../service/service.order");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.post("/mbtailors/order", (req, res) => {
        console.log("REST");
        return orderService.createNewOrder(req).then((response) => {
            console.log("AFTER REST", response);
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        });
    }),

    app.put("/mbtailors/order/:id", (req, res) => {
        return orderService.updateOrderById(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    }),

    app.get("/mbtailors/order/ordereddate/:from/:to", (req, res) => {
        return orderService.getOrdersByOrderedDate(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        });
    }),

    app.get("/mbtailors/order/delivereddate/:from/:to", (req, res) => {
        return orderService.getOrdersByDeliveredDate(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        });
    }),

    app.get("/mbtailors/order/:userId", (req, res) => {
        return orderService.getOrdersByUserId(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        });
    }),

    app.delete("/mbtailors/order/:id", (req, res) => {
        return orderService.deleteOrder(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    })
}
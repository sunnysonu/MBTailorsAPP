var bodyParser = require("body-parser");
var transactionService = require("../service/service.transcation");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.post("/mbtailors/transaction", (req, res) => {
        return transactionService.createTransaction(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        }, (error) => {
            throw error;
        }) 
    }),

    app.get("/mbtailors/transactions/:from/:to", (req, res) => {
        return transactionService.getTransactions(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    }),

    app.get("/mbtailors/transactions/:id", (req, res) => {
        return transactionService.getTransactionById(req).then((response) => {
            if(response) {
                res.send(response);
            } else {
                res.send("Something Went Wrong");
            }
        })
    })
}
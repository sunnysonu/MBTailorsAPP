var transactionModelService = require("../dbService/transaction.dbService");

var createTransaction = (req) => {
    var transaction = {
        amount : req.body.amount,
        transactionType : req.body.transactionType
    }

    return transactionModelService.createTransaction(transaction).then((response) => {
        return Promise.resolve(response);
    }, (error) => {
        return Promise.reject(error);
    });
}

var getTransactions = (req) => {
    var period = {
        from : new Date(req.params.from).toISOString(),
        to : new Date(req.params.to).toISOString()
    };
    console.log(period);
    return transactionModelService.getTransactions(period).then((transactions) => {
        if(transactions) {
            return Promise.resolve(transactions);
        } else {
            return Promise.reject();
        }
    })
}

var getTransactionById = (req) => {
    return transactionModelService.getTransactionById(req.params.id).then((response) => {
        if(response) {
            return Promise.resolve(response);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

module.exports = {
    createTransaction : createTransaction,
    getTransactions : getTransactions,
    getTransactionById : getTransactionById
}
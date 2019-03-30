var transactionModel = require("../models/transaction.model");

var createTransaction = (data) => {
    var transactionModelInst = new transactionModel(data);
    return new Promise((resolve, reject) => {
        transactionModelInst.save((err, res) => {
            if(!err) {
                return resolve(res);
            } else {
                return reject(err);
            }
        });
    });
}

var getTransactions = (period) => {
    var query = {
        time : { $gte: period.from, $lte: period.to}
    };

    return new Promise((resolve, reject) => {
        transactionModel.find(query, (err, transactions) => {
            if(!err) {
                return resolve(transactions);
            } else {
                return resolve([]);
            }
        })
    })
}

var getTransactionById = (id) => {
    var query = {
        _id : id
    }

    return new Promise((resolve, reject) => {
        transactionModel.findOne(query, (err, transaction) => {
            if(!err) {
                return resolve(transaction);
            } else {
                return reject();
            }
        })
    })
}

module.exports = {
    createTransaction : createTransaction,
    getTransactions : getTransactions,
    getTransactionById : getTransactionById
}
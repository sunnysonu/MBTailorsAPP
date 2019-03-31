var orderModel = require("../models/order.model");

var createNewOrder = (order) => {
    console.log("DB SERVICE", order);
    var orderModelInst = new orderModel(order);
    return new Promise((resolve, reject) => {
        orderModelInst.save((err, res) => {
            console.log("AFTER REST", res);
            if(!err) {
                return resolve(res);
            } else {
                return reject(err);
            }
        });
    });
}

var updateOrderById = (id, order) => {
    var query = {
        _id : id
    };

    var updateSet = order;

    return orderModel.findOneAndUpdate(query, updateSet).then((response) => {
        if(response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject();
        }
    })
}

var getOrdersByOrderedDate = (period) => {
    var query = {
        orderedTime : { $gte: period.from, $lte: period.to}
    };

    return new Promise((resolve, reject) => {
        orderModel.find(query, (err, orders) => {
            if(!err) {
                return resolve(orders);
            } else {
                return resolve([]);
            }
        })
    })
}

var getOrdersByDeliveredDate = (period) => {
    var query = {
        deliveredTime : { $gte: period.from, $lte: period.to}
    };

    return new Promise((resolve, reject) => {
        orderModel.find(query, (err, orders) => {
            if(!err) {
                return resolve(orders);
            } else {
                return resolve([]);
            }
        })
    });
}

var getOrdersByUserId = (userId) => {
    var query = {
        userId : userId
    };

    return new Promise((resolve, reject) => {
        orderModel.find(query, (err, orders) => {
            if(!err) {
                return resolve(orders);
            } else {
                return resolve([]);
            }
        })
    });
}

var deleteOrder = (id) => {
    var query = {
        _id : id
    }
    console.log("IN DBSERVICE", query);
    return orderModel.findOneAndDelete(query).then((response) => {
        console.log("AFTER DBSERVICE", response);
        if(response) {
            return Promise.resolve(response);
        } else {
            return Promise.reject();
        }
    });
}

module.exports = {
    createNewOrder : createNewOrder,
    updateOrderById : updateOrderById,
    getOrdersByOrderedDate : getOrdersByOrderedDate,
    getOrdersByDeliveredDate : getOrdersByDeliveredDate,
    getOrdersByUserId : getOrdersByUserId,
    deleteOrder : deleteOrder
}
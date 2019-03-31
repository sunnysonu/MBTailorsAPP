var orderModelService = require("../dbService/order.dbService");

var createNewOrder = (req) => {
    var order = {};

    if(req.body.userId) {
        order.userId = req.body.userId;
    }

    if(req.body.employeeIds) {
        order.employeeIds = req.body.employeeIds;
    }

    if(req.body.transactionIds) {
        order.transactionIds = req.body.transactionIds;
    }

    if(req.body.garmets) {
        order.garmets = req.body.garmets;
    }

    if(req.body.textile) {
        order.textile = req.body.textile;
    }

    if(req.body.status) {
        order.status = req.body.status;
        if(order.status === "delivered") {
            order.deliveredTime = Date.now();
        }
    }

    if(req.body.balance) {
        order.balance = req.body.balance;   
    }

    console.log("SERVICE", order);

    return orderModelService.createNewOrder(order).then((response) => {
        console.log("AFTER SERVICE", response);
        if(response){
            return Promise.resolve(response);
        } else {
            Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    });
}

var updateOrderById = (req) => {
    var order = {};
    var id = req.params.id;

    if(req.body.employeeIds) {
        order.employeeIds = req.body.employeeIds;
    }

    if(req.body.transactionIds) {
        order.transactionIds = req.body.transactionIds;
    }

    if(req.body.garmets) {
        order.garmets = req.body.garmets;
    }

    if(req.body.textile) {
        order.textile = req.body.textile;
    }

    if(req.body.status) {
        order.status = req.body.status;
        if(order.status === "delivered") {
            order.deliveredTime = Date.now();
        }
    }

    if(req.body.balance) {
        order.balance = req.body.balance;   
    }

    return orderModelService.updateOrderById(id, order).then((response) => {
        if(response){
            return Promise.resolve(response);
        } else {
            Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    });
}

var getOrdersByOrderedDate = (req) => {
    var period = {
        from : new Date(req.params.from).toISOString(),
        to : new Date(req.params.to).toISOString()
    };

    return orderModelService.getOrdersByOrderedDate(period).then((orders) => {
        if(orders) {
            return Promise.resolve(orders);
        } else {
            return Promise.reject();
        }
    })
}

var getOrdersByDeliveredDate = (req) => {
    var period = {
        from : new Date(req.params.from).toISOString(),
        to : new Date(req.params.to).toISOString()
    };

    return orderModelService.getOrdersByDeliveredDate(period).then((orders) => {
        if(orders) {
            return Promise.resolve(orders);
        } else {
            return Promise.reject();
        }
    });
}

var getOrdersByUserId = (req) => {
    var userId;
    if(req.params.userId) {
        userId = req.params.userId;
    }

    return orderModelService.getOrdersByUserId(userId).then((orders) => {
        if(orders) {
            return Promise.resolve(orders);
        } else {
            return Promise.reject();
        }
    });
}

var deleteOrder = (req) => {
    return orderModelService.deleteOrder(req.params.id).then((order) => {
        if(order) {
            return Promise.resolve(order);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

module.exports = {
    createNewOrder : createNewOrder,
    updateOrderById : updateOrderById,
    getOrdersByOrderedDate : getOrdersByOrderedDate,
    getOrdersByDeliveredDate : getOrdersByDeliveredDate,
    getOrdersByUserId : getOrdersByUserId,
    deleteOrder : deleteOrder
}

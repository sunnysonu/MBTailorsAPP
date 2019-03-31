var textileModelService = require("../dbService/textile.dbService");

var createNewTextile = (req) => {
    var textile = {
        brandName : req.body.brandName,
        quantityAvailable : req.body.quantityAvailable,
        price : req.body.price
    }

    return textileModelService.createNewTextile(textile).then((response) => {
        if(response){
            return Promise.resolve(response);
        } else {
            Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

var getTextile = (req) => {
    return textileModelService.getTextile().then((textile) => {
        if(textile) {
            return Promise.resolve(textile);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

var getTextileByName = (req) => {
    return textileModelService.getTextileByName(req.params.brandName).then((textile) => {
        if(textile) {
            return Promise.resolve(textile);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

var updateTextileById = (req) => {
    return textileModelService.updateTextileById(req.params.id, req.body).then((textile) => {
        if(textile) {
            return Promise.resolve(textile);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

var deleteTextile = (req) => {
    return textileModelService.deleteTextile(req.params.id).then((textile) => {
        if(textile) {
            return Promise.resolve(textile);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

module.exports = {
    createNewTextile : createNewTextile,
    getTextile : getTextile,
    getTextileByName : getTextileByName,
    updateTextileById : updateTextileById,
    deleteTextile : deleteTextile
}
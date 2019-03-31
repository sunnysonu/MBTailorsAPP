var garmetModelService = require("../dbService/garmet.dbService");

var createNewGarmet = (req) => {
    var garmet = {
        name : req.body.name,
        price : req.body.price
    }

    return garmetModelService.createNewGarmet(garmet).then((response) => {
        if(response){
            return Promise.resolve(response);
        } else {
            Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

var getGarmets = (req) => {
    return garmetModelService.getGarmets().then((garmets) => {
        if(garmets) {
            return Promise.resolve(garmets);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

var getGarmetByName = (req) => {
    return garmetModelService.getGarmetByName(req.params.name).then((garmets) => {
        if(garmets) {
            return Promise.resolve(garmets);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

var updateGarmetById = (req) => {
    return garmetModelService.updateGarmetById(req.params.id, req.body).then((garmet) => {
        if(garmet) {
            return Promise.resolve(garmet);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

var deleteGarmet = (req) => {
    return garmetModelService.deleteGarmet(req.params.id).then((garmet) => {
        if(garmet) {
            return Promise.resolve(garmet);
        } else {
            return Promise.resolve();
        }
    }).catch((error) => {
        return Promise.resolve();
    })
}

module.exports = {
    createNewGarmet : createNewGarmet,
    getGarmets : getGarmets,
    getGarmetByName : getGarmetByName,
    updateGarmetById : updateGarmetById,
    deleteGarmet : deleteGarmet
}
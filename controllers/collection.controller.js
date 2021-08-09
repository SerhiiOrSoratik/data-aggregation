const collectionModel = require('../models/collection');

class Collection {
    getData() {
       collectionModel.getData();
    };

    showDate(res) {
        collectionModel.showDate(res);
    }
}

module.exports = new Collection();
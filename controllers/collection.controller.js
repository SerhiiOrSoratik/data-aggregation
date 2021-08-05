const collectionModel = require('../models/colletions');

class Collection {
    info = {};

    getData() {
        // list of tasks for today
        collectionModel.getData();
    };

    async showDate(res) {
        res.status(200);
        res.json(await collectionModel.showDate());
    }
}

module.exports = new Collection();
const listsModel = require('../models/lists');

class Lists {
    
    async createList(req, res) {
       const {id, title} = req.body;
       res.status(201)
       res.json(await listsModel.createList(id, title));
    }

    async getLists(req, res) {
        res.status(200);
        res.json(await  listsModel.getLists());
    }

    async updateTask(req, res) {
        res.status(200);
        res.json(await listsModel.updateTask(req.body.title, req.params.id));
    }

    async deleteList(req, res) {
        await listsModel.updateTask(req.params.id)
        res.status(200);
        res.end();
    }

    createTask(req, res) {
        listsModel.createTask(req, res);
    }

    getTasks(req, res) {    
        listsModel.getTasks(req, res);
    }
}

module.exports = new Lists();
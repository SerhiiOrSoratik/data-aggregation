const tasks = require('./tasks.controller');
const listModel = require('../models/lists');

class Lists {
    
    createList(req, res) {
        listModel.createList(req, res);
    }

    getLists(req, res) {
        listModel.getLists(req, res);
    }

    updateTask(req, res) {
        listModel.updateTask(req, res);
    }

    deleteList(req, res) {
        listModel.deleteList(req, res);
    }

    createTask(req, res) {
        req.body.listid = req.params.listid;
        tasks.createTask(req, res);
    }

    getTasks(req, res) {
       listModel.getTasks(req, res);
    }
}

module.exports = new Lists();
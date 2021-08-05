const taskModel = require('../models/tasks');

class Tasks {

     async createTask(req, res) {
        const {listid, task, done, due_date} = req.body;
        res.status(200);
        res.json(await taskModel.createTask(listid, task, done, due_date));
    }

     async getTasks(req, res) {
        res.status(201);
        res.json(await taskModel.getTasks());
    }

     async getTask(req, res) {
        res.status(201)
        res.json(await taskModel.getTask(req.params.id));
    }

    updateTask(req, res) {
        taskModel.updateTask(req, res);
    }

    async putTask(req, res) {
        const {task, done, due_date} = req.body;
        res.status(200);
        res.json(await taskModel.putTask(task, done, due_date, req.params.id));
    }

     deleteTask(req, res) {
        taskModel.deleteTask(req, res);
    }
}

module.exports = new Tasks();
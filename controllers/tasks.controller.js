const taskModel = require('../models/tasks');

class Tasks {

     async createTask(req, res) {
        try {
            const {listid, task, done, due_date} = req.body;
            res.status(201);
            res.json(await taskModel.createTask(listid, task, done, due_date));
        }
        catch {
            res.status(400);
            res.end('Bad request');
        }
        
    }

     async getTasks(req, res) {
        res.status(200);
        res.json(await taskModel.getTasks());
    }

     async getTask(req, res) {
        res.status(200)
        res.json(await taskModel.getTask(req.params.id));
    }

    updateTask(req, res) {
        try {
            taskModel.updateTask(req, res);
        }
        catch {
            res.status(400);
            res.end('Bad request');
        }
    }

    async putTask(req, res) {
        try {
            const {task, done, due_date} = req.body;
            res.status(200);
            res.json(await taskModel.putTask(task, done, due_date, req.params.id));
        }
        catch {
            res.status(400);
            res.end('Bad request');
        }
        
    }

     deleteTask(req, res) {
         try {
            taskModel.deleteTask(req.params.id);
            res.status(200);
            res.end();
         }
         catch {
            res.status(400);
            res.end('Bad request');
         }
        
    }
}

module.exports = new Tasks();
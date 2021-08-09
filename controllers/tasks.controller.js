const taskModel = require('../models/tasks')

class Tasks {

    createTask(req, res) {
        taskModel.createTask(req, res);
    }

    getTasks(req, res) {
        taskModel.getTasks(req, res)
    }

    getTask(req, res) {
        taskModel.getTask(req, res);
    }

    updateTask(req, res) {
        taskModel.updateTask(req, res);
    }

    putTask(req, res) {
        taskModel.putTask(req, res);
    }

    deleteTask(req, res) {
        taskModel.deleteTask(req, res);
    }
}

module.exports = new Tasks();
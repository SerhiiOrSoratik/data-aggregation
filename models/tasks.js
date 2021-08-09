const db = require('../db');

class TasksModel {

    async createTask(listid, task, done, due_date) {
            const newTask = await db.query(`INSERT INTO todo (listid, task, done, due_date) VALUES ($1, $2, $3, $4) RETURNING *`, [listid, task, done, due_date]);
            return newTask.rows;    
    }

    async getTasks() {
        const tasks = await db.query('SELECT * FROM todo;');
        return tasks.rows;
    }

    async getTask(id) {
        const task = await db.query(`SELECT * FROM todo WHERE id=$1;`, [id]);
        return task.rows;
    }

    async updateTask(req, res) {
        let newtask = {};

        if (req.body.task && !req.body.done && !req.body.due_date) {
            
            newtask = await db.query(`UPDATE todo SET task=$1 WHERE id=$2 RETURNING *`, [req.body.task, req.params.id]);
            
            res.status(200);
            res.json(newtask.rows);
        }
        else if (!req.body.task && req.body.done !== undefined && !req.body.due_date) {
            newtask = await db.query(`UPDATE todo SET done=$1 WHERE id=$2 RETURNING *`, [req.body.done, req.params.id]);
            res.status(200);
            res.json(newtask.rows);
        }
        else if (!req.body.task && !req.body.done && req.body.due_date) {
            newtask = await db.query(`UPDATE todo SET due_date=$1 WHERE id=$2 RETURNING *`, [req.body.due_date, req.params.id]);
            res.status(200);
            res.json(newtask.rows);
        }
        else {
            res.status(400);
            res.end('Bad request');
        } 
    }

    async putTask(task, done, due_date, id) {
        const newtask = await db.query(`UPDATE todo SET task=$1, done=$2, due_date=$3 WHERE id=$4 RETURNING *`, [task, done, due_date, id]);
        return newtask.rows;
    }

    async deleteTask(id) {
        await db.query(`DELETE FROM todo WHERE id=$1;`, [id]);
    }
}

module.exports = new TasksModel();
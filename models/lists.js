const db = require('../db');

class ListsModel {
    
    async createList(id, title) {
        const newList = await db.query(`INSERT INTO lists (id, title) VALUES ($1, $2) RETURNING *`, [id, title]);
        return newList.rows;
    }

    async getLists() {
        const lists = await db.query('SELECT * FROM lists;');
        return lists.rows;
    }

    async updateTask(title, id) {
        const list = await db.query(`UPDATE lists SET title=$1 WHERE id=$2 RETURNING *`, [title, id]);
        return list.rows;
    }

    async deleteList(id) {
        await db.query(`DELETE FROM lists WHERE id=$1;`, [id]);

    }

    async createTask(req, res) {
        const {task, done, due_date} = req.body;
        const listid = req.params.listid;
        const newTask = await db.query(`INSERT INTO todo (listid, task, done, due_date) VALUES ($1, $2, $3, $4) RETURNING *`, [listid, task, done, due_date]);
        res.status(201);
        res.json(newTask.rows);
    }

    async getTasks(req, res) {
        const listid = req.params.listid;
        const all = req.query.all;
        let tasks = {};
        if (all === 'true') {
             tasks = await db.query(`SELECT * FROM todo WHERE listid = $1;`, [listid]);
             res.status(200);
             res.json(tasks.rows);
        }    
        else if(all === 'false') {
             tasks = await db.query(`SELECT * FROM todo WHERE (listid = $1) AND (done = false)`, [listid]);
             res.status(200);
             res.json(tasks.rows);
        }
        else {
            res.status(400);
            res.end('Bad request');
        } 
    }
}

module.exports = new ListsModel();
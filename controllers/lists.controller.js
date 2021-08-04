const db = require('../db');

class Lists {
    
    async createList(req, res) {
        const {id, title} = req.body;
        const newList = await db.query(`INSERT INTO lists (id, title) VALUES ($1, $2) RETURNING *`, [id, title]);
        res.status(201);
        res.json(newList.rows);
    }

    async getLists(req, res) {
        const lists = await db.query('SELECT * FROM lists;');
        res.status(200);
        res.json(lists.rows);
    }

    async updateTask(req, res) {
        const list = await db.query(`UPDATE lists SET title=$1 WHERE id=$2 RETURNING *`, [req.body.title, req.params.id]);
        res.status(200);
        res.json(list.rows);
    }

    async deleteList(req, res) {
        await db.query(`DELETE FROM lists WHERE id=$1;`, [req.params.id]);
        res.status(200);
        res.end();
    }

    async createTask(req, res) {
        const {id, task, done, due_date} = req.body;
        const listid = req.params.listid;
        const newTask = await db.query(`INSERT INTO todo (id, listid, task, done, due_date) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [id, listid, task, done, due_date]);
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

module.exports = new Lists();
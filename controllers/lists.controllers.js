const db = require('../db');

class Lists {
    
    async getTasks(req, res) {
        const listid = req.params.listid;
        const all = req.query.all;
        let tasks = {};
        if (all) {
             tasks = await db.query(`SELECT * FROM todo WHERE listid = $1;`, [listid]);
             console.log('aa')
        }   
        else {
             tasks = await db.query(`SELECT * FROM todo WHERE (listid = $1) AND (done = false)`, [listid]);
        }
        res.status(200);
        res.json(tasks.rows);
    }

}

module.exports = new Lists();
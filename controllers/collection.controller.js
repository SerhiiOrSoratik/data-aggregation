const db = require('../db');

class Collection {
    info = {};

    async getData() {
        // list of tasks for today
        this.info = await db.query('SELECT task, title AS taskList FROM lists RIGHT JOIN todo ON lists.id = todo.listid WHERE todo.due_date = CURRENT_DATE;')
    };

    showDate(res) {
        res.status(200);
        res.json(this.info.rows);
    }
}

module.exports = new Collection();
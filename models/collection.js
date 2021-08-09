const knexDb = require('../knex');

class CollectionModel {
    info = {};

    async getData() {
        // list of tasks for today
        knexDb.column('task', {tasklist: 'title'})
        .select().from('lists')
        .rightJoin('todo', 'lists.id', 'todo.listid')
        .where('todo.due_date', new Date())
        .then((data) => {
           this.info = data;
        })
    };

    showDate(res) {
        res.status(200);
        res.json(this.info);
    }
}

module.exports = new CollectionModel();
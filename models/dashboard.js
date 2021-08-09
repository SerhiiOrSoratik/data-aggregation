const knexDb = require('../knex');

class DashboardModel {
    getInfo(req, res) {
        let nowDay = new Date();
        let endDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 23, 59, 59, 0);

        knexDb('todo')
        .select('title', knexDb.raw('COUNT(*)'))
        .rightJoin('lists', 'lists.id', 'todo.listid')
        .where('done', false)
        .whereBetween('due_date', [nowDay, endDay])
        .groupBy('lists.title')
        .then((data) => {
            res.json(data)
        })
    }
}

module.exports = new DashboardModel();
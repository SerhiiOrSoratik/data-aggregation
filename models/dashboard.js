const db = require('../db');

class DashboardModel { 
    async getInfo() {
        let nowDay = new Date();
        let endDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 23, 59, 59, 0);
        const resultTask = await db.query(`SELECT title, COUNT(*) FROM todo RIGHT JOIN lists ON lists.id = todo.listid WHERE (done = false) AND (due_date BETWEEN $1 AND $2) GROUP BY lists.title;`, [nowDay, endDay])
        return resultTask.rows;
    }
}

module.exports = new DashboardModel();
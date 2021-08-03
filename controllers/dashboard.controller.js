const db = require('../db');

class Dashboard { 
    async getInfo(req, res) {
        // the number of tasks scheduled for today
        const sheduledTasks = await db.query('SELECT COUNT(*) FROM todo WHERE due_date BETWEEN CURRENT_DATE AND CURRENT_DATE;')
        // lists and number of unfulfilled tasks
        const unfulfilledTasks = await db.query('SELECT title, COUNT(*) FROM lists RIGHT JOIN todo ON lists.id = todo.listid GROUP BY lists.title;');
        const result = {
            sheduledTasks: sheduledTasks.rows,
            unfulfilledTasks: unfulfilledTasks.rows
        }
        res.json(result);
    }
}

module.exports = new Dashboard();
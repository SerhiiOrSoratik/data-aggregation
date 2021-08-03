const Router = require('express');
const router = new Router();
const lists = require('../controllers/lists.controller');

router.get('/', (req, res) => {
    lists.getLists(req, res);
})

router.post('/', (req, res) => {
    lists.createList(req, res);
});

router.patch('/:id', (req, res) => {
    lists.updateTask(req, res);
})

router.delete('/:id', (req, res) => {
    lists.deleteList(req, res);
})

router.post('/:listid/tasks', (res, req) => {
    lists.createTask(res, req);
})

router.get('/:listid/tasks', (res, req) => {
    lists.getTasks(res, req);
});


module.exports = router;
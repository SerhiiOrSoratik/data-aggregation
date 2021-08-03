const Router = require('express');
const router = new Router();
const lists = require('../controllers/lists.controllers');

router.get('/:listid/tasks', (res, req) => {
    lists.getTasks(res, req);
})

module.exports = router;
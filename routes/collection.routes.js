const Router = require('express');
const collection = require('../controllers/collection.controller');
const router = new Router();

router.get('/today', (req, res) => {
    collection.showDate(res);
});

module.exports = router;
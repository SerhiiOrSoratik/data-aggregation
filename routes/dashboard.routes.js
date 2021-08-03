const Router = require('express');
const router = new Router();
const dashboard = require('../controllers/dashboard.controller');

router.get('/', (req, res) => {
    dashboard.getInfo(req, res);
})

module.exports = router;
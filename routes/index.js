const express = require('express');
const router = express.Router();

const tasks = require('./tasks.routes');
const dashboard = require('./dashboard.routes');
const collection = require('./collection.routes');
const lists = require('./lists.routes');

router.use('/lists', lists);
router.use('/tasks', tasks);
router.use('/dashboard', dashboard);
router.use('/collection', collection);


module.exports = router;
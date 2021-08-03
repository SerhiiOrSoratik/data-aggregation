const express = require('express');
const router = express.Router();

const todolist = require('./todolist.routes');
const dashboard = require('./dashboard.routes');
const collection = require('./collection.routes');
const lists = require('./lists.routes');

router.use('/todolist', todolist);
router.use('/dashboard', dashboard);
router.use('/collection', collection);
router.use('/lists', lists);

module.exports = router;
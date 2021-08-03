const express = require('express');
const router = express.Router();

const todolist = require('./todolist.routes');
const dashboard = require('./dashboard.routes');
const collection = require('./collection.routes')

router.use('/todolist', todolist);
router.use('/dashboard', dashboard);
router.use('/collection', collection);

module.exports = router;
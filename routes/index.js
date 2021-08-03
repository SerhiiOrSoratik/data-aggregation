const express = require('express');
const router = express.Router();

const todolist = require('./todolist.routes');
const dashboard = require('./dashboard.routes');

router.use('/todolist', todolist);
router.use('/dashboard', dashboard);

module.exports = router;
const knex = require('knex');
const knexFile = require('./knexfile');

const knexDb = knex(knexFile.development);

module.exports = knexDb;
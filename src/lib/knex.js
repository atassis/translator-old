const Knex = require('knex');
const { db: { connection } } = require('configuration');

const knex = Knex({
  client: 'mysql',
  connection,
  useNullAsDefault: true,
});

module.exports = knex;

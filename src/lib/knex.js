const Knex = require('knex');
const { db: { connection } } = require('configuration');

const knex = Knex({
  client: 'mysql',
  connection,
  useNullAsDefault: true,
  pool: {
    min: 1,
    max: 8,
  },
});

module.exports = knex;

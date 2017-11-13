const knex = require('lib/knex');
const Bookshelf = require('bookshelf');

const bookshelf = Bookshelf(knex);

module.exports = bookshelf;

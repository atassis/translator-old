
exports.up = function (knex, Promise) {
  knex.schema.createTable('words', function (table) {
    table.increments();
    table.string('name');
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  knex.schema.dropTable('users');
};

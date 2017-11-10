
exports.up = function (knex, Promise) {
  const words = knex.schema.createTable('words', function (t) {
    t.integer('ID').unsigned().primary();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
    t.dateTime('deletedAt').nullable();
    t.string('word');
    t.string('language');
    t.index(['word', 'language']);
    t.unique(['word', 'language']);
    t.text('decription');
  });
  const wordsWords = knex.schema.createTable('words_words', function (t) {
    t.increments('ID').unsigned().primary();
    t.integer('word_id').unsigned();
    t.integer('translation_id').unsigned();
    t.timestamps();
  });
  return Promise.all([words, wordsWords])
    .then(() => {
      return knex.schema.table('words_words', (t) => {
        t.foreign('word_id').references('words.ID').onDelete('CASCADE');
      });
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.table('words_words', (t) => {
    t.dropForeign('word_id');
  }).then(() => Promise.all([
    knex.schema.dropTable('words'),
    knex.schema.dropTable('words_words'),
  ]));
};

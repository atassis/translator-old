
exports.up = function (knex, Promise) {
  const words = knex.schema.createTable('words', (t) => {
    t.increments('ID').unsigned().primary();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
    t.dateTime('deletedAt').nullable();
    t.string('word').notNullable();
    t.string('language').notNullable();
    t.index(['word', 'language']);
    t.unique(['word', 'language']);
    t.text('decription').nullable();
  });
  const wordsWords = knex.schema.createTable('words_words', (t) => {
    t.increments('ID').unsigned().primary();
    t.integer('word_id').unsigned().notNullable().references('words.ID')
      .onDelete('CASCADE');
    t.integer('translation_id').unsigned().references('words.ID').onDelete('CASCADE')
      .notNullable();
    t.timestamps();
  });
  return Promise.all([words, wordsWords]);
};

exports.down = function (knex, Promise) {
  return knex.schema.table('words_words', (t) => {
    t.dropForeign('word_id');
    t.dropForeign('translation_id');
  }).then(() => Promise.all([
    knex.schema.dropTable('words'),
    knex.schema.dropTable('words_words'),
  ]));
};

const bookshelf = require('lib/bookshelf');

const Word = bookshelf.Model.extend({
  tableName: 'words',
  translations() {
    return this.belongsToMany(Word, 'words_words', 'word_id', 'translation_id', 'ID', 'ID');
  },
});

module.exports = Word;

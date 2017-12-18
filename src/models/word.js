const bookshelf = require('lib/bookshelf');

const Word = bookshelf.Model.extend({
  tableName: 'words',
  hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
  idAttribute: 'ID',
  translations() {
    return this.belongsToMany(Word, 'words_words', 'word_id', 'translation_id');
  },
});

module.exports = Word;

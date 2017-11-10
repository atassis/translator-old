const Word = require('models/word');

const get = (word) => {
  return new Word(word);
};

module.exports = {
  get,
};

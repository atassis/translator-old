const Response = require('models/response');

class WordResponse extends Response {
  constructor(word) {
    super({ word });
    this.word = word;
  }

  getResponseWithTranslations() {
    this.setExtraProperty('translations', this.word.getTranslations());
    return this.getResponse();
  }
}

module.exports = WordResponse;

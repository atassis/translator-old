const knex = require('lib/knex');
const words = [
  {
    name: 'Яблоко',
    translations: {
      en: 'Apple',
    },
  },
];

class Word {
  constructor(string) {
    this.name = string;
    const supposedWord = words.find(word => word.name === string);
    if (supposedWord) {
      this.translations = supposedWord.translations;
    }
  }

  async init() {
    const data = await knex('words').where('name', this.name);
    Object.assign(this, data);
  }

  async save() {
    return await knex.update();
  }

  translateTo(lang) {
    return this.translations[lang];
  }

  getTranslations() {
    return this.translations;
  }
}

module.exports = Word;

const Router = require('koa-router');
const Word = require('models/word');
const weqw = require('models/WordContainer');
const router = new Router();

router.get('/', async ctx => (ctx.body = { words: await Word.fetchAll({ withRelated: 'translations' }) }));

router.get('/:word', async ctx => {
  const word = await Word.where('word', ctx.params.word).fetch({ withRelated: 'translations' });
  ctx.body = { word };
});

router.post('/:word/translation', async ctx => {
  const { params, request } = ctx;
  const { word: wordString } = params;
  const { body: { translation: trString } } = request;
  try {
    const word = await Word.where('word', wordString).fetch({ withRelated: 'translations' });
    const translation = await Word.where('word', trString).fetch({ withRelated: 'translations' });
    const att = await word.translations().attach([translation]);
    ctx.body = { word, translation };
  } catch (error) {
    throw  error;
  }
});

router.get('/:name/:language', async ctx => {
  ctx.body = { params: ctx.params };
});

router.post('/', async ctx => {
  try {
    const data = ctx.request.body;
    data.language = data.language.toLowerCase();
    const word = await new Word(ctx.request.body).save();
    ctx.body = { word };
  } catch (error) {
    throw  error;
  }
});

module.exports = router;

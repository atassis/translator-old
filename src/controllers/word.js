const Router = require('koa-router');
const words = require('lib/words');
const WordResponse = require('models/wordResponse');

const router = new Router();

router.get('/', async ctx => (ctx.body = 'hi'));

router.get('/:name', async ctx => {
  const word = words.get(ctx.params.name);
  const response = new WordResponse(word);
  ctx.body = response.getResponseWithTranslations();
});

router.get('/:name/:language', async ctx => {
  const { name, language } = ctx.params;
  const word = words.get(name);
  const response = new WordResponse(word);
  ctx.body = response.getResponseWithTranslations();
});

module.exports = router;

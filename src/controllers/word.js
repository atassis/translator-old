const Router = require('koa-router');
const Word = require('models/word');

const router = new Router();

router.get('/', async ctx => (ctx.body = 'hi'));

router.get('/:word', async ctx => {
  const word = await new Word(ctx.params.word).init();
  ctx.body = word;
});

router.get('/:name/:language', async ctx => {
  ctx.body = { params: ctx.params };
});

router.post('/', async ctx => {
  ctx.body = `Request Body: ${ JSON.stringify(ctx.request.body) }`;
});

module.exports = router;

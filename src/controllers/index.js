const Router = require('koa-router');
const word = require('./word');
const { restError, restModifier } = require('middlewares');

const router = new Router();

router.use(restError, restModifier);

router.use('/word', word.routes(), word.allowedMethods());

router.get('/', async (ctx) => {
  ctx.body = 'asdasd';
});

router.all('*', async (ctx) => {
  ctx.status = 404;
  ctx.body = '404';
});

module.exports = router;

const Router = require('koa-router');
const word = require('./word');
// const { pageError } = require('middlewares');

const router = new Router();

router.use('/word', word.routes(), word.allowedMethods());

router.get('/', async (ctx) => {
  ctx.body = 'asdasd';
});

// router.use(pageError);

router.all('*', async (ctx) => {
  ctx.status = 404;
  ctx.body = '404';
});

module.exports = router;

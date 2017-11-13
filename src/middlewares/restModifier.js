const { ReadStream } = require('fs');

module.exports = async function (ctx, next) {
  await next();
  if (!(ctx.body instanceof Buffer || ctx.body instanceof ReadStream)) {
    ctx.response.set('Content-Type', 'application/json');
    ctx.body = { response: ctx.body };
  }
};

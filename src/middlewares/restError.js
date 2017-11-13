const Boom = require('boom');

module.exports = async function (ctx, next) {
  try {
    await next();
  } catch (error) {
    console.info(error);
    if (error === null) {
      error = Boom.create(500, 'Undefined error', { timestamp: Date.now() });
    }
    ctx.app.emit('error', error, ctx);
    const data = error.output ? error.output.payload : { statusCode: 500, message: error.message };
    /* eslint no-ex-assign: 0 */

    ctx.response.set('Content-Type', 'application/json');
    ctx.status = data.statusCode;
    ctx.body = JSON.stringify({
      error: {
        status: data.statusCode,
        title: error.errmsg || data.message,
      },
    });
  }
};

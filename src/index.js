process.env.NODE_PATH = __dirname;
require('module').Module._initPaths(); // eslint-disable-line no-underscore-dangle
const { createServer } = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const config = require('configuration');
const controllers = require('controllers');

const app = new Koa();

app.proxy = true;
app.keys = [config.secret];

app.use(koaBody());
app.use(controllers.routes());
app.use(controllers.allowedMethods());

const server = createServer(app.callback());

server.listen(config.port, () => {
  const { address, port } = server.address();
  console.log(`App is running on ${ address }:${ port }, development is ${ config.development }`);
});

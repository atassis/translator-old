process.env.NODE_PATH = __dirname;
require('module').Module._initPaths(); // eslint-disable-line no-underscore-dangle
const { createServer } = require('http');
const Koa = require('koa');

const config = require('configuration');
const knex = require('lib/knex');
const app = new Koa();

app.proxy = true;
app.keys = [config.secret];

knex.raw('show tables;')
  .then(console.log);
const server = createServer(app.callback());

server.listen(config.port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App is running on ${ host }:${ port }, development is ${ config.development }`);
});

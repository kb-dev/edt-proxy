const proxy = require('koa-better-http-proxy');
const Koa = require('koa');
const app = new Koa();

const URL = 'celcat.u-bordeaux.fr';
const PORT = process.env.PORT || 3000;

app.use(
  proxy(URL, {
    https: true,
  })
);
app.listen(PORT);

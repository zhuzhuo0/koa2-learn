const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

let home = new Router();
home
    .get('/zhuzhu', async (ctx) => {
        ctx.body = 'Home zhuzhu page';
    })
    .get('/todo', async (ctx) => {
        ctx.body = 'Home todo page';
    })

let page = new Router();
page
    .get('/zhuzhu', async (ctx) => {
        ctx.body = 'Page zhuzhu page';
    })
    .get('/todo', async (ctx) => {
        ctx.body = 'Page todo page';
    })

let router = new Router();
router
    .use('/home', home.routes(), home.allowedMethods())
    .use('/page', page.routes(), page.allowedMethods())

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('[demo] is starting at port 3000');
})
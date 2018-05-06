const Koa = require('koa');
const app = new Koa();
const koaParser = require('koa-bodyparser');

app.use(koaParser());

app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method='post' action='/'>
                <p>userName</p>
                <input name='name' type='text' /><br/>
                <p>age</p>
                <input name='age' type='text' /><br/>
                <p>website</p>
                <input name='website' type='text' /><br/>
                <button type='submit'>submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = ctx.request.body;
    } else {
        ctx.body = `<h3>404!</h3>`;
    }
})

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})
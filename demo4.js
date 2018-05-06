const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

function render(page) {
    return new Promise((resolve, reject) => {
        let pageUrl = `./pages/${page}`;
        fs.readFile(pageUrl, 'binary', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

async function route(url) {
    let page = '404.html';
    console.log(1111);
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    let html = await render(page);
    return html;
}

app.use(async (ctx) => {
    console.log(ctx.request.url);
    let html = await route(ctx.request.url);
    console.log(html);
    ctx.body = html;
})

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})
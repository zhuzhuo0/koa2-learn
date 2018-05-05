const Koa = require('koa');
const app = new Koa();

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
        ctx.body = await prasePostRequest(ctx);
    } else {
        ctx.body = `<h3>404!</h3>`;
    }
})

function prasePostRequest(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postData = '';
            ctx.req.on('data', (data) => {
                postData += data;
            })
            ctx.req.addListener('end', () => {
                resolve(prasePostStr(postData));
            })
        } catch (error) {
            reject(error);
        }
    })
}

function prasePostStr(queryStr) {
    console.log(queryStr);
    let postData = {};
    queryStr = queryStr.split('&');
    for (let [index, str] of queryStr.entries()) {
        let itemList = str.split('=');
        postData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    console.log(postData);
    return postData;
}

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})
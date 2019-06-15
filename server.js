/* eslint-disable */
const Koa = require('koa');
const next = require('next');
const serve = require('koa-static');
const Router = require('koa-router');
const routes = require('./routes.json');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();

    for(const route of Object.keys(routes)) {
        router.get(route, async (ctx) => {
            const query = { ...ctx.query, ...ctx.params };
            await app.render(ctx.req, ctx.res, routes[route], query);
            ctx.respond = false;
        });
    }

    router.get('*', async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200;
        await next();
    });

    server.use(serve('static'));

    server.use(router.routes());
    server.listen(port, () => {
        if(dev)
            console.log(`> Frontend ready on http://0.0.0.0:${port}`);
    });
});

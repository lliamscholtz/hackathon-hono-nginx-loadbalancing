import { Context, Hono } from 'hono';

const app = new Hono();

const logRequest = (c: Context) => {
    console.log(new Date().toISOString(), c.req.method, c.req.url);
};

app.get('/', (c) => {
    logRequest(c);
    return c.json({ message: 'Hello, Hackathon!' });
});

app.post('/', async (c) => {
    logRequest(c);
    const payload = await c.req.json();

    if (!payload.number) {
        return c.json({ error: 'Number is required' }, 400);
    }

    const result = payload.number * payload.number;
    return c.json({ ...payload, result });
});

export default {
    port: 1337,
    fetch: app.fetch,
};

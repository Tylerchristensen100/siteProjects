import db from '~/server/db.json' assert { type: 'json' };

export default defineEventHandler((event) => {
    console.log(db.blog)
    if(event.node.req.method === 'GET') {
        event.node.res.end(JSON.stringify(db.blog));
    }
    if(event.node.req.method === 'POST') {
        event.node.res.end('Hello World');
    }
});
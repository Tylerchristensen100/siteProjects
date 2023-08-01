import db from '~/server/db.json' assert { type: 'json' };

export default defineEventHandler((event) => {
    const id = event.context.params.id
    console.log(event.context.params)
    if(event.node.req.method === 'GET') {
        event.node.res.end(JSON.stringify(db.blog[Number(id)-1]));
    }
    if(event.node.req.method === 'POST') {
        console.log(event.node.req.body)
        event.node.res.end(db.blog);
    }
});
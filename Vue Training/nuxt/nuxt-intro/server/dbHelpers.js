import fs from 'fs';
import db from '~/server/db.json' assert { type: 'json' };

function saveDb(db) {
    fs.writeFileSync('./server/db.json', JSON.stringify(db));
}
export function createBlogPost(post) {
    const newDb = db.blog.push(post);
    saveDb(newDb);
    return newDb;
}

export function updateBlogPost(id, post) {
    const newDb = db.blog[Number(id)-1] = post;
    saveDb(newDb);
    return newDb;
}

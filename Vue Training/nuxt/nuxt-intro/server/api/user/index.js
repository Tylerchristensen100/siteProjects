import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)

const fetchUser = async (id) => {
    const { data, error } = await supabase.rpc('fetch_users')
    console.log(data, error)
    return data
}
export default defineEventHandler((event) => {

    const user = fetchUser(1)
    if (event.node.req.method === 'GET') {
        event.node.res.end(JSON.stringify(user));
    }
    if (event.node.req.method === 'POST') {
        event.node.res.end('Hello World');
    }
});

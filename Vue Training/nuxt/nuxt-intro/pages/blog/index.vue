<template>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <div class="post">
                <NuxtLink :to="`/blog/${post.id}`">{{ post.title }}</NuxtLink>
                <div class="content">
                    {{ post.content }}
                </div>
            </div>
        </li>
    </ul>

</template>

<script>
export default {
    data() {
        return {
            posts: []
        }
    },
    methods: {
        async getPosts() {
            try {
                const posts = await fetch(`http://localhost:3000/api/blog/`)
                .then(res => res.text())
                .then(data => data)
                this.posts = JSON.parse(posts)
            } catch (error) {
                console.log(error)
                this.posts = [{
                    id: '404',
                    title: 'Post not found',
                    content: 'Post not found'
                }]
            }
            
        }
    },
    mounted() {
        this.getPosts()
    }
}
</script>

<style>
.post {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 20px;
    min-height: 60px;

    display:grid;
    grid-template-columns: 1fr auto;
}
.post a {
    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;
}
.post .content {
    margin-top: 10px;
    margin-right: 40px;
}
</style>
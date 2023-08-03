<template>

    <div>
        <h1>{{  post.title }}</h1>
        <p>{{  post.content }}</p>

        <span>{{ post.id }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {}
        }
    },
    methods: {
        async getPost() {
            const id = this.$route.params.id
            try {
                const post = await fetch(`/api/blog/${id}`)
                .then(res => res.text())
                .then(data => data)
                this.post = JSON.parse(post)
            } catch (error) {
                console.log(error)
                this.post = {
                    id: '404',
                    title: 'Post not found',
                    content: 'Post not found'
                }
            }
            
        }
    },
    mounted() {
        this.getPost()
    }
}

</script>
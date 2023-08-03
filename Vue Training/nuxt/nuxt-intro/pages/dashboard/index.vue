<template>
    <h1>Dashboard</h1>
    <p>{{  userInfo.email }}</p>
    <p>{{  userInfo.id }}</p>

</template>

<script setup>
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()
    const { data, error } = await supabase.auth.getSession()
    console.log(data.session.user)
    const userInfo = {
        email: data.session.user.email,
        id: data.session.user.id
    }

</script>
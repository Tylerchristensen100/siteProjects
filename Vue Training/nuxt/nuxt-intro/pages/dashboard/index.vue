<template>
    <h1>Dashboard</h1>
    <h3> Welcome {{ user.email }}</h3>

</template>

<script setup>
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()
</script>
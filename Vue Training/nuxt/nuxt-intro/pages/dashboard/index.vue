<template>
    <h1>Dashboard</h1>
  

</template>

<script setup>
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()
    

    const {data, e} = await supabase.from('users').select('*')
    console.log(data, e)
</script>
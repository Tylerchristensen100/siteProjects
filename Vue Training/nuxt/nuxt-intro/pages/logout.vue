<script setup>
const supabase = useSupabaseClient()

const logout = async () => {
    const { data, error } = await supabase.auth.signOut()
    if(error) {
        console.log(error)
    }

    window.location.href = '/'
}

logout()

</script>
<template>
  
</template>
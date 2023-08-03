<template>
    <p>{{ i }}</p>
    <button @click="i++">Increment</button>
    <NuxtWelcome />
</template>

<script setup>
 const i = ref(0)

 watch(i)

onMounted(() => {
    console.log('Mounted')
    while(i < 100)
        i.value++
})
</script>
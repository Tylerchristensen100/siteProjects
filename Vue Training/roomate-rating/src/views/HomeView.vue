<template>
  <div class="container home">
    <Header />
    <h1>Welcome User</h1>
  </div>
</template>

<script>
import Header from '@/components/HeaderComp.vue'

export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>

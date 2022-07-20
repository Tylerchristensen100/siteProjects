<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Calculator from './components/Calculator.vue'
</script>

<template>
  <header>
    <div class="app">
      <Calculator/>
    </div>
  </header>

</template>

<style scoped>
.app {
  width:100%;
}
</style>

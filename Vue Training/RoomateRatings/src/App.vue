<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
           <a class="navbar-brand" href="#">Roomate Rater</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav ms-auto mb-lb-0">
              <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
              <RouterLink to="/login" class="nav-item nav-link">login</RouterLink>
              <RouterLink to="/register" class="nav-item nav-link">register</RouterLink>
            </div>
          </div>
        </div>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

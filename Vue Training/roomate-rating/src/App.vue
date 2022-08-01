<template>
  <nav class="navbar navbar-expand-md  navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="favicon.ico" alt="" width="30" height="24" class="d-inline-block align-text-top text-white">Roomate Rating
     </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  <router-view/>
</template>

<style>

</style>

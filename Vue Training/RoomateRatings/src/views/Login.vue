<!-- eslint-disable prettier/prettier -->

<script>
import Heading from '@/components/Heading.vue'

export default {
  name: 'Login',
  components: {
    Heading
  }
}
</script>


<template>
  <div class="container">
    <Heading />
    <div class="row">
        <h4>Login</h4>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Email</span>
        <input type="text" class="form-control" placeholder="John@example.com" aria-label="Email" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">Password:</span>
        <input type="text" class="form-control" placeholder="J1iL6#F85)NP" aria-label="Password" aria-describedby="basic-addon2">
        

         <div class="col-12">
    <button type="submit" class="btn btn-primary mt-5">Sign in</button>
        </div>
        </div>

    </div>
    
  </div>
</template>

<style>

</style>

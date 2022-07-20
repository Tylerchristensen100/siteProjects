<!-- eslint-disable prettier/prettier -->

<script>
import Heading from '@/components/Heading.vue'
export default {
  name: 'Register',
  components: {
    Heading
  }
}
</script>

<template>
  <div class="container">
    <Heading />

    <div class="row register">
    <form>
        <h4>Personal Info</h4>
        <div class="row input-group mt-3">
            <div class="col-6 ">
                <input type="text" class="form-control" placeholder="First name" aria-label="First name">
            </div>
            <div class="col-6">
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
            </div>
        </div>
        <div class="row input-group mt-3">
            <div class="col-8">
                <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone Number">
            </div>
            <div class="col-4">
                <input type="text" class="form-control" placeholder="Age" aria-label="Age">
            </div>
        </div>

        
        
        <h4>Address</h4>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Address Line 1</span>
            <input type="text" class="form-control" placeholder="555 west 900 south" aria-label="Email" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Address Line 2</span>
            <input type="text" class="form-control" placeholder="Apt 20" aria-label="Password" aria-describedby="basic-addon2">
        </div>

        <div class="row input-group mt-3">
            <div class="col-8 input-group">
                <span class="input-group-text" id="city">City</span>
            <input type="text" class="form-control" placeholder="Siracuse" aria-label="City" aria-describedby="city">
            </div>
            <div class="col-4 input-group">
                <span class="input-group-text" id="basic-addon1">State - dropdown</span>
                <input type="text" class="form-control" placeholder="State" aria-label="State">
            </div>
        </div>




        <h4>Create Log in</h4>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Email</span>
            <input type="text" class="form-control" placeholder="John@example.com" aria-label="Email" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Password:</span>
            <input type="text" class="form-control" placeholder="J1iL6#F85)NP" aria-label="Password" aria-describedby="basic-addon2">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Re-enter Password:</span>
            <input type="text" class="form-control" placeholder="J1iL6#F85)NP" aria-label="Password" aria-describedby="basic-addon2">
        </div>

         <div class="col-12">
            <button type="submit" class="btn btn-primary mt-5">Sign up</button>
        </div>
        
</form>
    </div>
  </div>
</template>

<style>

</style>

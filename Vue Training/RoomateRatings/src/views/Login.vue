<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->

<script>
import Heading from '@/components/Heading.vue'
import useVulidate from '@vuelidate/core'
import {required, email, minLength } from '@vuelidate/validators'


export default {
  name: 'Login',
  components: {
    Heading
  },


  setup() {
    return { v$: useVulidate()}
  },


  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },

  validations() {
    return {
        form: {
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(8),
            },
        }
    }
  }
  }

</script>

<template>
  <div class="container">
    <Heading />
    <div class="row login">
      <form @submit.prevent="onSubmit">
        <h4>Login</h4>
        <div
          class="input-group mb-3"
          :class="{ error: v$.form.email.$errors.length }"
        >
          <span class="input-group-text" id="basic-addon1">Email</span>
          <input
            v-model="v$.form.email.$model"
            type="text"
            class="form-control"
            placeholder="John@example.com"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
          <!-- error message --><br />
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.email.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>

        <div
          class="input-group mb-3"
          :class="{ error: v$.form.password.$errors.length }"
        >
          <span class="input-group-text" id="basic-addon2">Password:</span>
          <input
            v-model="v$.form.password.$model"
            type="text"
            class="form-control"
            placeholder="J1iL6#F85)NP"
            aria-label="Password"
            aria-describedby="basic-addon2"
          />
          <!-- error message --><br />
          <div
            class="input-error"
            v-for="(error, index) of v$.form.password.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>

        <div class="col-12">
          <button
            type="submit"
            class="btn btn-primary mt-5"
            :disabled="v$.form.$invalid"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>

<!-- eslint-disable vue/multi-word-component-names -->

<script>
import Heading from '@/components/Heading.vue'
import useVulidate from '@vuelidate/core'
import {required, email, minLength, alpha, numeric } from '@vuelidate/validators'
import { helpers } from '@vuelidate/validators'


const pValidate = helpers.regex("phoneCheck",/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im);
const checkPassword = (password) => {
    return password === this.form.password2.$model;
}



export default {
  name: 'Register',
  components: {
    Heading,
    
  },
  data() {
    return {
        form: {
        email: '',
        password: '',
        password2: '',

        fName: '',
        lName: '',
        phone: '',
        age: '',

        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''

      },
    }
  },
  setup() {
    return { v$: useVulidate()}
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
            password2: {
                required,
                minLength: minLength(8),
                checkPassword,
            },
            fName: {
                required, alpha,

            },
        lName: {
                required, alpha, 
            },
        phone: {
                required, pValidate,
            },
        age: {
                required, numeric,
            },

        address1: {
                required,
            },
        address2: {
                required,
            },
        city: {
                required, alpha,
            },
        state: {
                required, alpha,
            },
        zip: {
                required, numeric,
            },
        }
    }
  },
  submit() {
    //send the form data to the server
    console.log(this.form);

  }
}
</script>

<template>
  <div class="container">
    <Heading />

    <div class="row register">
    <form @submit.prevent="onSubmit">
        <h4 class="p-1 mt-5">Personal Info</h4>
        <div class="row mt-3">
            <div class="input-group mt-3">
                <span class="input-group-text" id="fName">First Name</span>
                <input type="text" class="form-control" placeholder="First name" aria-label="FirstName" v-model="v$.form.fName.$model">
            </div>
            <!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.fName.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>


            <div class="input-group mt-3">
                <span class="input-group-text" id="lName">Last Name</span>
                <input type="text" class="form-control" placeholder="Last name" aria-label="LastName" v-model="v$.form.lName.$model">
            </div>
            <!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.lName.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>


        </div>
        <div class="row mt-3">
            <div class="input-group">
                <span class="input-group-text" id="phone">Phone Number</span>
                <input type="text" class="form-control" placeholder="Phone Number" aria-label="phone" v-model="v$.form.phone.$model">
            </div>
            <!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.phone.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
            <div class="input-group mt-3">
                <span class="input-group-text" id="age">Age</span>
                <input type="text" class="form-control" placeholder="Age" aria-label="Age" v-model="v$.form.age.$model">
            </div>
            <!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.age.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>

        
        
        <h4 class="p-1 mt-5">Address</h4>
        <div class="input-group mt-3">
            <span class="input-group-text" id="address1">Address Line 1</span>
            <input type="text" class="form-control" placeholder="555 west 900 south" aria-label="address1" aria-describedby="address1" v-model="v$.form.address1.$model">
        </div>
        <!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.address1.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>


        <div class="input-group mt-3">
            <span class="input-group-text" id="address2">Address Line 2</span>
            <input type="text" class="form-control" placeholder="Apt 20" aria-label="address2" aria-describedby="address2" v-model="v$.form.address2.$model">
        </div>
<!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.address2.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>


        <div class="">
            <div class="input-group mt-3">
                <span class="input-group-text" id="city">City</span>
            <input type="text" class="form-control" placeholder="Siracuse" aria-label="city" aria-describedby="city" v-model="v$.form.city.$model">
            </div>
            <!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.city.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>


            <div class=" input-group mt-3">
                <span class="input-group-text" id="state">State</span>
                <input type="text" class="form-control" placeholder="California" aria-label="State" v-model="v$.form.state.$model">
            </div>
<!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.state.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>


            <div class=" input-group mt-3">
                <span class="input-group-text" id="state">Zip code</span>
                <input type="text" class="form-control" placeholder="10012" aria-label="zip" v-model="v$.form.zip.$model">
            </div>
            <!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.zip.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
            
        </div>




        <h4 class="p-1 mt-5">Create Log in</h4>
        <div
          class="input-group mt-3"
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
          
        </div>
        <!-- error message -->
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.email.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>




        <div>
        <div
          class="input-group mt-3"
          :class="{ error: v$.form.password.$errors.length }"
        >
          <span class="input-group-text" id="password1">Password</span>
          <input
            v-model="v$.form.password.$model"
            type="text"
            class="form-control"
            placeholder="J1iL6#F85)NP"
            aria-label="Password"
            aria-describedby="password1"
          />
          
        </div>
        <!-- error message -->
          <div
            class="input-error"
            v-for="(error, index) of v$.form.password.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>

        <div
          class="input-group mt-3"
          :class="{ error: v$.form.password2.$errors.length }"
        >
          <span class="input-group-text" id="password2">Confirm Password</span>
          <input
            v-model="v$.form.password2.$model"
            type="text"
            class="form-control"
            placeholder="J1iL6#F85)NP"
            aria-label="Password"
            aria-describedby="password2"
          />
         
        </div>

         <!-- error message --><br />
          <div
            class="input-error"
            v-for="(error, index) of v$.form.password2.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>



         <div class="col-12">
            <button
            type="submit"
            class="btn btn-primary mt-5"
            :disabled="v$.form.$invalid"
            @click="submit()"
          >
            Sign up
          </button>
        </div>
        
</form>
    </div>
  </div>
</template>
<style>
.input-error {
    display:block;
    margin-top:-20px;
    
}
.error-msg {
  color: red;
  padding-left:10px;
  margin-bottom:12px;
}
.input-group {
    margin-top:50px;
}
</style>

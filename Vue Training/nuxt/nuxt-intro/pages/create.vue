

<template>
    <h1>Sign Up</h1>
    <div class="form">
        <input type="text" v-model="name" placeholder="Name" />
        <input type="text" v-model="email" placeholder="Email" />
        <input type="text" v-model="phone" placeholder="Phone" />
        <input type="password" v-model="password" placeholder="Password" />
        <input type="password" v-model="passwordTwo" placeholder="Verify Password" />

        <button @click="signUp">Sign Up</button>

    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
const phone = ref('')
const name = ref('')
const passwordTwo = ref('')


const signUp = async () => {
    if (password.value != passwordTwo.value) {
        alert('Passwords do not match')
        return
    }

    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        phone: phone.value,
        password: password.value,
    })
    console.log(data, error)
    window.location.href = '/dashboard'
}

</script>

<style>
.form {
    display:flex;
    flex-direction: column;
    align-items: center;
}
input {
    display: block;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1.2rem;
    width: 300px;
}

button {
    display: block;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #363636;
    color: #fff;
    font-weight: bold;
}

button:hover {
    background-color: #4e4e4e;
}
</style>
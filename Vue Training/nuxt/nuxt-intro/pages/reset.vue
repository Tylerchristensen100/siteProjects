<template>
    <h1>Reset Password</h1>
    <div class="form">
        <input type="text" v-model="email" placeholder="Email" />

        <button @click="resetPassword">Send Reset Link</button>

    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const email = ref('')

const resetPassword = async () => {
    await supabase.auth.resetPasswordForEmail(email.value, {
        redirectTo: '/login'
    })
}
</script>

<style>
.form {
    display: flex;
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
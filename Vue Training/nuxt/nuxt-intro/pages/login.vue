<script setup>
const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
const phone = ref('')


const signInWithEmail = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    window.location.href = '/dashboard'
}

const signInWithPhone = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        phone: phone.value,
        password: password.value,
    })
    window.location.href = '/dashboard'
}

const signInWithOTP = async () => {
    const { data, error } = await supabase.auth.signInWithOtp({
        email: email.value,
    })
    window.location.href = '/dashboard'
}

const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
    window.location.href = '/dashboard'
}

const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })
    window.location.href = '/dashboard'
}

const setActiveTab = (tab) => {
    console.log(tab)

    //tab-container
    document.querySelectorAll('.tab-container div').forEach((div) => {
        div.classList.remove('active')
        if (div.id == tab) {
            div.classList.add('active')
        }
    })

    //tabs 
    document.querySelectorAll('.tabs ul li button').forEach((button) => {
        if(button.innerText.toLowerCase() != tab) {
            button.classList.remove('active')
        } else {
            button.classList.add('active')
        }
    })
}
</script>
<template>
    <div class="tabs">
        <ul>
            <li><button @click="setActiveTab('email')">Email</button></li>
            <li><button @click="setActiveTab('phone')">Phone</button></li>
            <li><button @click="setActiveTab('otp')">OTP</button></li>
            <li><button @click="setActiveTab('oauth')">OAuth</button></li>
        </ul>
    </div>
    <div class="tab-container">
        <div id="email" class="active">
            <label for="email">Email</label>
        <input v-model="email" type="email" />
        <label for="password">Password</label>
        <input v-model="password" type="password" />

        <button @click="signInWithEmail">
            Sign In with E-Mail
        </button>
    </div>

    <div id="phone">
        <label for="phone">Phone</label>
        <input v-model="phone" type="tel" />

        <button @click="signInWithPhone">
            Sign In with Phone
        </button>
    </div>

    <div id="otp">
        <label for="email">Email</label>
        <input v-model="email" type="email" />
        <button @click="signInWithOTP">
            Sign In with OTP
        </button>
    </div>

    <div id="oauth">
        <button @click="signInWithGoogle">
            Sign In with Google
        </button>
        <button @click="signInWithGithub">
            Sign In with Github
        </button>
    </div>
    </div>
    <div class="otherOptions">
        <NuxtLink to="/create">Create Account</NuxtLink>
        <NuxtLink to="/reset">Forgot Password</NuxtLink>
    </div>
</template> 

<style>
.tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tabs ul {
    /* display: grid;
    grid-template-columns: auto auto auto auto; */
    display: flex;
    flex-direction: row;
    margin: 20px;
}
.tabs ul li {
    list-style: none;
    margin: 10px;
}
.tabs ul li button {
    font-size: 20px;
    padding: 15px;
    background-color: #363636;
    border-radius: 5px;
}
#email, #phone, #otp, #oauth {
    display: none;
}
div.active {
    display:flex !important;
}
.tabs .active {
    background-color: #4e4e4e;
    color: #fff;
}

.tab-container {
    display: block;
    margin-right: 40px;
    margin-left: 40px;
}

.tab-container div.active {
    flex-direction: column;
}

.tab-container div.active input {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #363636;
}
.tab-container div.active label {
    margin: 5px;
    margin-left: 10px;
    margin-top: 20px;
    
}

.tab-container div.active button {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #363636;
    background-color: #363636;
    color: #fff;
}
.otherOptions {
    margin-top: 80px;
    margin-left: 60px;
    margin-right: 60px;
    display:flex;
    flex-direction: column;
}
.otherOptions a {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #363636;
    background-color: #363636;
    color: #fff;
    text-decoration: none;
    text-align: center;
}
</style>
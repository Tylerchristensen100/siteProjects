<template>
    <header>
        <nav>
            <div class="logo">
                <NuxtLink to="/">Nuxt-Intro</NuxtLink>
            </div>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li v-if="isLoggedIn"><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
            </ul>
            <div class="log">
                <div v-if="isLoggedIn"><NuxtLink to='/logout'>Logout</NuxtLink></div>
                <div v-else="isLoggedIn"><NuxtLink to='/login'>Login</NuxtLink></div>
            </div>
        </nav>
    </header>
</template>

<script setup>
const supabase = useSupabaseClient()
let isLoggedIn = false
const { data, error } = await supabase.auth.getSession()
if(data.session != null) {
    isLoggedIn = true
    console.log('Logged In')

    if(data.session.expires_in < 1500) {
    supabase.auth.refreshSession()
    console.log('Session Refreshed')
}
}
else {
    isLoggedIn = false
    console.log('Not Logged In')
}


</script>
<style>
    header {
        background-color: #6f6d6d;
        color: #fff;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
    nav .logo {
        width: 500px;
        padding-right: 10px;
    }
    nav .logo a {
        font-size: 3rem;
        font-weight: bold;
        text-decoration: none;
    }
    nav ul {
        display: flex;
        grid-template-columns: auto auto auto auto auto;
        width: 100%;
    }  
    nav ul li {
        list-style: none;
    }
    nav ul li a {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 1rem;
        text-align: center;
        padding: 15px;
        margin: 20px;
        border-radius: 5px;
        background-color: #363636;
    }
    nav ul li a:hover, .log a:hover {
        background-color: #4e4e4e;
        color: #fff;
        text-decoration: none;
    }
    nav ul li a.active {
        background-color: #4e4e4e;
        color: #fff;
    }
    nav .log {
        display: flex;
        justify-content: flex-end;
    }
    nav .log a {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 1rem;
        text-align: center;
        padding: 15px;
        margin: 20px;
        border-radius: 5px;
        background-color: #363636;
    }
</style>
<template>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">about</NuxtLink></li>
                <li><NuxtLink to=""></NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>
<style>
    header {
        padding: 20px;
    }
    nav ul {
        display: grid;
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
    nav ul li a:hover {
        background-color: #4e4e4e;
        color: #fff;
    }
    nav ul li a.active {
        background-color: #4e4e4e;
        color: #fff;
    }
</style>
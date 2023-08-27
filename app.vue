<script setup>
</script>
<template>
    <NuxtPage class="font-noto"/>
</template>

<style>
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
    color:#666666;
}

div {
    box-sizing: border-box;
}

a {
    font-weight: 500;
    color: inherit;
    text-decoration: inherit;
}

a:hover {
    color: inherit;
}

#__nuxt {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    height: 100vh;
    text-align: center;
    box-sizing: border-box;
    font-family:'Noto Sans TC', sans-serif;
}

@media (max-width: 1440px) {
    * {
        font-size: 18px;
    }
}

@media (max-width: 1024px) {
    * {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    * {
        font-size: 14px;
    }
}

@media (max-width: 320px) {
    * {
        font-size: 12px;
    }
}

h1 {
    font-size: 2.5rem;
    margin: 0;
}

h2 {
    font-size: 2.25rem;
    margin: 0;
}

h3 {
    font-size: 2rem;
    margin: 0;
}

h4 {
    font-size: 1.75rem;
    margin: 0;
}

h5 {
    font-size: 1.5rem;
    margin: 0;
}
h6 {
    font-size: 1.25rem;
    margin: 0;
}
a, p, div, span{
    font-size: 1rem;
    margin: 0;
}
</style>
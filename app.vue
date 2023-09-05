<script setup>
import {useScroll, watchDeep, whenever} from '@vueuse/core'
import {useAnimate} from "@vueuse/core/index";

const main = ref()
const header = ref()
const {x, y, isScrolling, arrivedState, directions} = useScroll(main)


console.log(directions.top)
watch(directions, () => {
        if (directions.bottom) {
            useAnimate(header,  [
                { opacity: '0',transform: 'translateY(-100%)' },
            ], {
                duration: 400,
                fill: 'forwards'
            })
        }
        else if(directions.top){
            useAnimate(header,  [
                { opacity: '1',transform: 'translateY(0)' },
            ], {
                duration: 400,
                fill: 'forwards'
            })
        }
    }
)


</script>

<template>
    <div ref="main" class="m-0 p-0 h-screen overflow-x-hidden text-center">
        <common-used-marquee/>
        <div ref="header" class="w-full bg-red-400 fixed z-50">
            這是Header
            <common-used-fixed-header/>
        </div>
        <NuxtPage class="font-noto"/>
    </div>
</template>

<style>

html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
    color: #666666;
    vertical-align: sub;
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
    font-family: 'Noto Sans TC', sans-serif;
}

* {
    font-size: 20px;
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

a, p, div, span {
    font-size: 1rem;
    margin: 0;
}
</style>
<script setup>
import {useScroll, watchDeep, whenever, useWindowScroll,useAnimate} from '@vueuse/core'

const main = ref()
const header = ref()
const {directions} = useScroll(main)
const {x, y} = useWindowScroll()

watch(y, (oV, nV) => {
        if (oV > nV) {
            // useAnimate(header, [
            //     {opacity: '0', transform: 'translateY(-100%)'},
            // ], {
            //     duration: 400,
            //     fill: 'forwards'
            // })
        } else if (oV < nV) {
            useAnimate(header, [
                {opacity: '1', transform: 'translateY(0)'},
            ], {
                duration: 400,
                fill: 'forwards'
            })
        }
    }
)


</script>

<template>

    <div ref="header"
         :class="y === 0?'bg-transparent':'bg-white shadow-lg'"
         class="w-full hidden md:block fixed z-50 transition-all ease-in-out duration-400">
        <common-used-fixed-header/>
    </div>
    <div ref="main" class="m-0 p-0 text-center">
        <!--        <common-used-marquee/>-->

        <NuxtPage class="font-noto mt-4"/>
    </div>
    <div>
        <common-used-footer/>
    </div>
</template>

<style>
*{
    box-sizing: border-box;
}
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
    color: #666666;
    vertical-align: sub;
    min-width: 100%;
    min-height: 100vh;
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
    text-align: center;
    box-sizing: border-box;
    font-family: 'Noto Sans TC', sans-serif;
    overflow-x: hidden;
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
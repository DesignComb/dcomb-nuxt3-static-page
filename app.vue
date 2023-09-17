<script setup>
import {useScroll, useWindowScroll, useAnimate} from '@vueuse/core'

const main = ref()
const header = ref()
const {x, y} = useWindowScroll()
import {useMainStore} from "~/store"

const store = useMainStore()

useSeoMeta({
    title: '蜂巢設計 Design Comb',
    ogTitle: '蜂巢設計 Design Comb',
    description: '蜂巢設計是由工程師組成的網站開發團隊，擅長製作精緻的互動式網站，重視使用者體驗的後台系統等',
    ogDescription: '蜂巢設計是由工程師組成的網站開發團隊，擅長製作精緻的互動式網站，重視使用者體驗的後台系統等',
    ogImage: 'https://example.com/image.png',
})
const {
    data: notionDB,
    error: notionDBErr
} = await useAsyncData('notionDB', () => store.fetchNotionDB())

onMounted(() => {
    store.isMobileHeader = false
})

watch(y, (oV, nV) => {
        if (oV < nV) {
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
    <transition
        enter-class="transition-opacity duration-2000"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
    >
        <div v-if="!store.isMobileHeader"
             class="md:hidden fixed z-99 top-1 left-1/2 translate-x--1/2 i-bx-chevrons-down
      text-4xl text-white mix-blend-difference transition-opacity duration-2000 pointer-events-none"></div>
    </transition>
    <div ref="header"
         :class="y === 0?'bg-transparent':'bg-white shadow-lg'"
         class="w-full fixed z-100 transition-all ease-in-out duration-400">
        <common-used-fixed-header/>
    </div>
    <div ref="main" class="m-0 p-0 text-center bg-white">
        <NuxtPage class="font-noto mt-4"/>
    </div>
    <div>
        <common-used-footer/>
    </div>
    <div class="hidden">{{ notionDB }}</div>
</template>

<style>
* {
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

ul, ol, li {
    list-style-type: none;
    margin: 0;
    padding: 0;
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
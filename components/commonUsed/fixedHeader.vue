<script setup lang="ts">
import {useMainStore} from "~/store"
import {useAnimate, useSwipe, useScrollLock} from '@vueuse/core'

const store = useMainStore()
const mobileHeader = ref()
const swiperDownDetector = ref()
// const isMobileHeader = ref(false)

const {isSwiping, direction} = useSwipe(swiperDownDetector)
const {isSwiping: headerIsSwiping, direction: headerSwipingDirection} = useSwipe(mobileHeader)

const route = useRoute()

watch(isSwiping, () => {
    if (direction.value === 'down') {
        useAnimate(mobileHeader, {transform: 'translateY(0)'}, {
            duration: 800,
            fill: 'forwards'
        })
        store.isMobileHeader = true
        document.body.style.overflow = 'hidden';
    }
})
watch(headerIsSwiping, () => {
    if (headerSwipingDirection.value === 'up') {
        useAnimate(mobileHeader, {transform: 'translateY(-100%)'}, {
            duration: 800,
            fill: 'forwards'
        })
        setTimeout(() => {
            store.isMobileHeader = false
            document.body.style.overflow = 'auto';
        }, 500)
    }
})

const clickOpenMobileHeader = () => {
    if (store.isMobileHeader) {
        useAnimate(mobileHeader, {transform: 'translateY(-100%)'}, {
            duration: 800,
            fill: 'forwards'
        })
        setTimeout(() => {
            store.isMobileHeader = false
            document.body.style.overflow = 'auto';
        }, 500)
    } else {
        useAnimate(mobileHeader, {transform: 'translateY(0)'}, {
            duration: 800,
            fill: 'forwards'
        })
        store.isMobileHeader = true
        document.body.style.overflow = 'hidden';
    }
}
const headerLink = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/About',
    },
    {
        name: 'Projects',
        link: '/Projects',
    },
    {
        name: 'Contact',
        link: '/Contact',
    },
]
</script>

<template>
    <div class="hidden md:flex max-w-content px-12 py-3 justify-center">
        <nuxt-link v-for="(link,index) in headerLink" :key="link.name" :to="link.link"
                   :class="{'router-link-active' : route.path.includes(link.name)}"
                   class="relative decoration-incline-container">
            <div
                    class="decoration-incline-line border-box italic font-Roboto font-bold text-base tracking-wider relative px-10 py-1">
                <span class="text-stroke-0.5">{{ link.name }}</span>
            </div>
        </nuxt-link>
    </div>
    <div ref="mobileHeader" class="md:hidden absolute top-0 translate-y-[-100%] w-full h-min bg-comb-light z-30">
        <div class="max-w-content px-12 py-12 flex-col justify-end">
            <nuxt-link v-for="(link,index) in headerLink" :key="link.name"
                       @click="clickOpenMobileHeader"
                       :to="link.link" class="relative block mr-6">
                <div :class="index === 0 ? 'border-t-1': ''"
                     class="italic font-bold flex justify-between items-center tracking-wide relative font-light p-4 border-box border-solid border-0 border-b-1 border-black">
                    <!--          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="currentColor" d="m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18Zm96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24Z"/></svg>-->
                    <div class="i-ph-terminal-bold"></div>
                    {{ link.name }}
                </div>
            </nuxt-link>
        </div>
        <div ref="swiperDownDetector" @click="clickOpenMobileHeader"
             :class="store.isMobileHeader ? 'op100': 'op0 transition delay-300 duration-200'"
             class="md:hidden absolute cursor-pointer border-solid border-0 border-b-4 border-#666
          flex justify-center bg-comb-light w-full text-center py-2 top-100% ease-in-out">
            <div class="text-4xl i-bx-chevrons-up"></div>
        </div>
    </div>

</template>

<style scoped>

.decoration-incline-container:first-child .decoration-incline-line::before {
    box-sizing: border-box;
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    top: 50%;
    left: 0%;
    background-color: #666;
    transform: translateY(-40%) rotate(40deg);
    z-index: 10;
    transition: all 0.5s ease-in-out; /* 添加透明度過渡效果 */
}

.decoration-incline-line:after {
    box-sizing: border-box;
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    top: 50%;
    left: 100%;
    background-color: #666;
    transform: translateY(-40%) rotate(40deg);
    z-index: 10;
    transition: all 0.5s ease-in-out; /* 添加透明度過渡效果 */
}

.decoration-incline-line span {
    transition: all 0.3s ease-in;
}
.router-link-active span,.decoration-incline-line:hover span {
    -webkit-text-stroke-color: black;
    color: #FFF2E0;
    font-size: 1.5rem;
    font-weight: 900;
    transition: all 0.3s ease-in;
}
</style>
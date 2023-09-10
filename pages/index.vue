<script setup lang="ts">
import {useMainStore} from "~/store"

const store = useMainStore()

await useAsyncData('notionDB', () => store.fetchNotionDB())



import { useAnimate, useSwipe, useScrollLock  } from '@vueuse/core'

const mobileHeader = ref()
const swiperDownDetector = ref()
const isMobileHeader = ref(false)

const {isSwiping, direction} = useSwipe(swiperDownDetector)
const {isSwiping:headerIsSwiping, direction:headerSwipingDirection} = useSwipe(mobileHeader)




watch(isSwiping ,()=>{
    if(direction.value === 'down'){
        useAnimate(mobileHeader, { transform: 'translateY(0)' }, {
            duration: 800,
            fill:'forwards'
        })
        isMobileHeader.value = true
        document.body.style.overflow = 'hidden';
    }
})
watch(headerIsSwiping ,()=>{
    if(headerSwipingDirection.value === 'up'){
        useAnimate(mobileHeader, { transform: 'translateY(-100%)' }, {
            duration: 800,
            fill:'forwards'
        })
        setTimeout(()=>{
            isMobileHeader.value = false
            document.body.style.overflow = 'auto';
        },500)
    }
})

const clickOpenMobileHeader = () =>{
    if(isMobileHeader.value){
        useAnimate(mobileHeader, { transform: 'translateY(-100%)' }, {
            duration: 800,
            fill:'forwards'
        })
        setTimeout(()=>{
            isMobileHeader.value = false
            // document.body.style.overflow = 'auto';
        },500)
    }
    else {
        useAnimate(mobileHeader, { transform: 'translateY(0)' }, {
            duration: 800,
            fill:'forwards'
        })
        isMobileHeader.value = true
        // document.body.style.overflow = 'hidden';
    }
}
</script>
<template>
    <div class="w-full min-h-screen flex flex-row flex-wrap justify-center items-center">
        <div class="w-full h-screen flex flex-row flex-wrap justify-center items-center bg-comb px-8 py-6 mb-8 md:px-20 md:py-16">
            <div class="w-full max-w-content h-full relative flex justify-center items-center bg-white border-solid overflow-hidden border-#666 border-12px rounded-4.5rem">

                <div ref="mobileHeader" class="md:hidden absolute top-0 translate-y-[-100%] w-full h-1/3 bg-comb:85 z-30">
                    <div class="max-w-content px-12 py-12 flex-col justify-end">
                        <nuxt-link to="/" class="relative mr-6 decoration-clip-border">
                            <div class="italic font-bold text-4xl tracking-wide relative px-10 py-1 hover:bg-comb hover:text-white transition hover:transition-delay-300 duration-500 ease-in-out border-box">
                                About
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="relative mr-6 decoration-clip-border">
                            <div class="italic font-bold text-4xl tracking-wide relative px-10 py-1 hover:bg-comb hover:text-white transition hover:transition-delay-300 duration-500 ease-in-out border-box">
                                Projects
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="relative mr-6 decoration-clip-border">
                            <div class="italic font-bold text-4xl tracking-wide relative px-10 py-1 hover:bg-comb hover:text-white transition hover:transition-delay-300 duration-500 ease-in-out border-box">
                                Contact
                            </div>
                        </nuxt-link>
                    </div>
                    <div ref="swiperDownDetector" @click="clickOpenMobileHeader" class="md:hidden absolute cursor-pointer flex justify-center w-full text-center py-2 top-100%">
                        <div :class="isMobileHeader ? 'i-bx-chevrons-up ' : 'i-bx-chevrons-down'"
                            class="text-4xl transition-all duration-300 ease-in-out"></div>
                    </div>
                </div>
                <ClientOnly>
                    <animate-slogan-writing/>
                    <animate-two-hexagan-collapse/>
                    <animate-grey-hexagon/>
                </ClientOnly>
                <img class="absolute right-12 bottom-12 h-72" src="/scrollLine.svg" alt="scrollLine">
                <div class="absolute right-10 bottom-12 w-8 h-72 bg-white z-20 an-show-line"></div>
            </div>
        </div>

        <div class="w-full max-w-content relative z-20">

            <animate-section-expand-title>
                <template #enTitle>
                    Projects
                </template>
                <template #title>
                    作品
                </template>
            </animate-section-expand-title>
            <div class="relative mt-8 grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-12 justify-center flex-items-stretch p-12 md:p-20 pt-0 md:pt-0">
                <nuxt-link v-for="item in store.getDBItemArr" :to="`/works/${item.id}`" :key="item.id" replace>
                    <common-used-work-card>
                        <template #cover>
                            <img :src="getItemCover(item)" alt="cover"/>
                        </template>
                        <template #title>
                            {{ getItemTitleText(item) }}
                        </template>
                        <template #tags>
                            <div v-for="(tag,index) in item?.properties?.Tags?.multi_select"
                                 :class="`notion-bg-${tag.color}`"
                                 class="inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2">
                                {{ tag.name }}
                            </div>
                        </template>
                    </common-used-work-card>
                </nuxt-link>
            </div>
        </div>

        <div class="w-full max-w-content relative pt-24 z-20">
            <div class="relative text-left scale-75 origin-l md:scale-100">
                <h1 class="font-black text-[4.75rem] scale-y-80 op-70 text-[#999999] text-comb font-noto absolute -top-12 pl-6">
                    〔</h1>
                <h1 class="font-black font-noto text-comb op-70 pl-52">TEAM MEMBER</h1>
                <h1 class="font-black text-[4rem]  text-black absolute -top-12 pl-36">成員</h1>
                <h1 class="font-black text-[4.75rem] scale-y-80 op-70 text-[#999999] text-comb font-noto absolute -top-12 pl-140">
                    〕</h1>
            </div>

            <div class="relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-12 justify-center flex-items-stretch p-12 md:p-20">
                <div class="relative border-solid border-comb border-12 rounded-full overflow-hidden">
                    <div id="image-container" title="嗨! 我是後端工程師 Hao"
                         class="relative h-full pb-[100%] rounded-full overflow-hidden">
                        <img src="/team-member-hao.png" alt="team-member-hao"/>
                    </div>
                    <div class="absolute bottom-8 left-1/2 translate-x--1/2 z-20">
                        HAO
                    </div>
                </div>
                <div class="relative border-solid border-comb border-12 rounded-full overflow-hidden">
                    <div id="image-container"
                         class="relative h-full pb-[100%] rounded-full overflow-hidden">
                        <img src="/team-member-hao.png" alt="team-member-hao"/>
                    </div>
                    <div class="absolute bottom-8 left-1/2 translate-x--1/2 z-20">
                        HAO
                    </div>
                </div>
                <div class="relative border-solid border-comb border-12 rounded-full overflow-hidden">
                    <div id="image-container"
                         class="relative h-full pb-[100%] rounded-full overflow-hidden">
                        <img src="/team-member-hao.png" alt="team-member-hao"/>
                    </div>
                    <div class="absolute bottom-8 left-1/2 translate-x--1/2 z-20">
                        HAO
                    </div>
                </div>
                <div class="relative border-solid border-comb border-12 rounded-full overflow-hidden">
                    <div id="image-container"
                         class="relative h-full pb-[100%] rounded-full overflow-hidden">
                        <img src="/team-member-hao.png" alt="team-member-hao"/>
                    </div>
                    <div class="absolute bottom-8 left-1/2 translate-x--1/2 z-20">
                        HAO
                    </div>
                </div>
                <div class="relative border-solid border-comb border-12 rounded-full overflow-hidden">
                    <div id="image-container"
                         class="relative h-full pb-[100%] rounded-full overflow-hidden">
                        <img src="/team-member-Eric.png" alt="team-member-hao"/>
                    </div>
                    <div class="absolute bottom-8 left-1/2 translate-x--1/2 z-20">
                        Eric
                    </div>
                </div>
                <div class="relative border-solid border-comb border-12 rounded-full overflow-hidden">
                    <div id="image-container"
                         class="relative h-full pb-[100%] rounded-full overflow-hidden">
                        <img src="/team-member-hao.png" alt="team-member-hao"/>
                    </div>
                    <div class="absolute bottom-8 left-1/2 translate-x--1/2 z-20">
                        HAO
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- for dynamic unocss    -->
    <span class="hidden notion-bg-default notion-bg-lightgray notion-bg-gray notion-bg-brown
               notion-bg-orange notion-bg-yellow notion-bg-green notion-bg-blue
               notion-bg-purple notion-bg-pink notion-bg-red"></span>
</template>

<style scoped>
.an-show-line {
    animation: shrink 2s forwards ease-in-out;
    animation-delay: 4s;
}
.slash-clip-path-left{
    clip-path: polygon(0 0, 100% 0, 100% 37.5%, 52.5% 100%, 0 100%, 0 0);
}
.slash-clip-path-right{
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0 100%, 0 65%);
}
@keyframes shrink {
    to {
        height: 0;
    }
}

</style>
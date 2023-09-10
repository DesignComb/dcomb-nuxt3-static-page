<script setup lang="ts">
import {NotionPage} from '@/utils/types/notionTypes'

import {getItemProjectImage, getItemText} from "~/utils/notionTransformData";

const route = useRoute()

import {useMainStore} from "~/store"

const store = useMainStore()

await useAsyncData('notionDB', () => store.fetchNotionDB())

const {
    data: notionPage,
    error: notionPageErr
} = await useAsyncData('notionPage', () => store.fetchNotionPage(<string>route.params.id))

// onMounted(() => {
//     if (!notionPage.value) {
//         window.location.reload()
//     }
// })

</script>

<template>
<!--    {{notionPage}}-->
    <div class="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:p-12 p-6 text-left">
        <h1 class="col-span-3 md:text-[3.5rem] text-black">{{ getItemTitleText( notionPage ) }}</h1>
        <div class="col-span-3 md:col-span-2 md:pr-12">
            <common-used-browser-line>MY WEBSITE</common-used-browser-line>
            <div class="text-left bg-white border-solid border-black border-1 h-[40rem] overflow-y-auto break-words">
                <div>
                    <img class="w-full" v-for="item in getItemProjectImage(notionPage)" :src="item" alt="cover"/>
                </div>
            </div>
        </div>
        <div class="col-span-3 md:col-span-1 md:pr-8 md:mt-0 mt-12 text-left text-sm tracking-wide leading-relaxed space-y-12">
            <div>
                <h4 class="text-black mb-4">INTRODUCTION</h4>
                <div v-html="getItemText(notionPage)"></div>
            </div>

            <a :href="notionPage?.properties?.Link?.url" target="_blank"
               class="btn-3d-flip relative block perspective-[2000rem] pr-12">
                <span class="btn-3d-flip-box relative block w-full h-full transition duration-500 ease-in-out">
                    <span
                            class="w-full p-2.5 block text-base box-border backface-hidden border-solid border-black text-black border-1">
                        DEMO<div class="inline-block i-bx-chevrons-right vertical-sub scale-110"></div>
                    </span>
                    <span
                            class="btn-3d-flip-back text-base absolute box-border w-full p-2.5 top-0 left-[100%] border-solid border-black bg-black text-white border-1 backface-hidden whitespace-nowrap">
                        EXPLORE NOW<div class="inline-block i-bx-link-external vertical-sub ml-2"></div>
                    </span>
                </span>
            </a>

            <div>
                <h6 class="text-black mb-2">SKILLS</h6>
                <span v-for="(tag,index) in notionPage?.properties?.Skill?.multi_select" :key="index"
                      :class="`notion-bg-${tag.color}`"
                      class="py-1 px-2.5 mr-1 rounded-md text-xs">
                       {{ tag.name }}
                </span>
            </div>

            <div>
                <h6 class="text-black">DATE</h6>
                <span>{{ notionPage?.properties?.Update?.date?.start }}</span>
            </div>

            <a :href="notionPage?.properties?.GitHub?.url" target="_blank" class="block cursor-pointer">
                <div class="inline-block i-bxl-github vertical-sub text-3xl hover:text-black"></div>
            </a>
        </div>

        <div class="col-span-3 mt-12">
            <h5 class="text-black mb-4">Others</h5>
            <div
                    class="relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 justify-center flex-items-stretch">
                <NuxtLink v-for="item in store.getSimilarItems" :to="`/works/${item.id}`" external>
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
                </NuxtLink>
            </div>
        </div>

    </div>
</template>

<style scoped>

.btn-3d-flip:hover .btn-3d-flip-box {
    transform: translateX(-50%) rotateY(-90deg);
}


.btn-3d-flip-box {
    transform: rotateY(0);
    transform-style: preserve-3d;
}

.btn-3d-flip-box-face {
    display: block;
    position: relative;
    transition: all 0.4s;
    backface-visibility: hidden;
}

.btn-3d-flip-box-face--front {
}

.btn-3d-flip-back {
    transform: translateX(-1px) rotateY(90deg);
    transform-origin: 0 0;
}
</style>
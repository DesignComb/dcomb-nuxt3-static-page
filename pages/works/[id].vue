<script setup lang="ts">
import {getItemProjectImage, getItemText} from "~/utils/notionTransformData";

const route = useRoute()
import {useMainStore} from "~/store"

const store = useMainStore()
const {data: notionDB, error} = await useAsyncData('notionDB', () => store.fetchNotionDB())

// const {
//     data: notionPageBlock,
//     error: notionPageBlockErr
// } = await useAsyncData('notionPageBlock', () => store.fetchNotionPageBlock(<string>route.params.id))
const {
    data: notionPage,
    error: notionPageErr
} = await useAsyncData('notionPage', () => store.fetchNotionPage(<string>route.params.id))

// const json: notionBlock[] = [/* Your JSON data */];

</script>

<template>
    <div class="w-full max-w-[1440px] mx-auto flex flex-wrap text-left md:p-12 p-6">
        <h1 class="w-full md:text-[3.5rem] text-black mb-12">{{ getItemTitleText(notionPage) }}</h1>
        <div class="w-full md:w-2/3 md:pr-12">
            <div class="h-8 border-solid border-black border-1 border-b-0 flex justify-between items-center">
                <div class="flex items-center">
                    <div class="w-16 mx-4 flex justify-around">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div class="font-Orbitron">MY WEBSITE</div>
                </div>
                <div class="flex h-full w-28 justify-between items-center">
                    <div class="h-full flex items-center">
                        <div class="i-bx-minus text-xl"/>
                    </div>
                    <div class="h-full flex items-center">
                        <div class="i-bx-square text-xl"/>
                    </div>
                    <div class="h-full flex items-center bg-red-500">
                        <div class="i-bx-x text-2xl text-white"/>
                    </div>
                </div>

            </div>
            <div class="text-left bg-white border-solid border-black border-1 h-[40rem] overflow-y-auto break-words">
                <!--                {{ notionPage }}-->
                <!--                <div id="image-container" class="relative w-full pb-[56.25%] overflow-hidden">-->
                <!--                    <img :src="getItemCover(notionPage)" alt="cover"/>-->
                <!--                </div>-->
                <div>
                    <!--                    {{getItemProjectImage(notionPage)}}-->
                    <img class="w-full" v-for="item in getItemProjectImage(notionPage)" :src="item" alt="cover"/>
                    <!--                    <img src="https://imgbox.com/nfrxFuiH" alt="cover"/>-->
                    <!--                    <a href="https://imgbox.com/nfrxFuiH" target="_blank"><img src="https://thumbs2.imgbox.com/fa/ed/nfrxFuiH_t.jpeg" alt="image host"/></a>-->
                    <!--                    <img class="w-full" src="https://dcomb-web.s3.ap-northeast-1.amazonaws.com/%E6%88%AA%E5%9C%96+2023-04-24+%E4%B8%8B%E5%8D%884.16.41.png" alt="image host"/>-->
                    <!--                    <img class="w-full" :src="`https://images2.imgbox.com/fa/ed/nfrxFuiH_o.jpeg`" alt="image host"/>-->
                </div>
                <!--                <div v-html="store.getNotionPageBlockHtml"></div>-->
            </div>
        </div>
        <div class="w-full md:w-1/3 md:pr-8 md:mt-0 mt-12 text-left text-sm tracking-wide leading-relaxed space-y-12">
            <div>
                <h4 class="text-black mb-4">INTRODUCTION</h4>
                <div v-html="getItemText(notionPage)"></div>
            </div>
            <a :href="notionPage?.properties?.Link?.url" target="_blank" class="btn-3d-flip relative block perspective-[2000rem] pr-12">
                <span class="btn-3d-flip-box relative block w-full h-full transition duration-500 ease-in-out">
                    <span class="w-full p-2.5 block text-base box-border backface-hidden border-solid border-black text-black border-1">
                        DEMO<div class="inline-block i-bx-chevrons-right vertical-sub scale-110"></div>
                    </span>
                    <span class="btn-3d-flip-back text-base absolute box-border w-full p-2.5 top-0 left-[100%] border-solid border-black bg-black text-white border-1 backface-hidden whitespace-nowrap">
                        EXPLORE NOW<div class="inline-block i-bx-link-external vertical-sub ml-2"></div>
                    </span>
                </span>
            </a>
            <!--            <span>{{ notionPage?.properties?.Update?.date?.start }}</span>-->
            <div>
                <h6 class="text-black mb-2">SKILLS</h6>
                <span v-for="(tag,index) in notionPage?.properties?.Skill?.multi_select"
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
            <!--            <h5 class="border-b border-solid border-comb bg-white">專案連結</h5>-->
            <!--            <a :href="notionPage?.properties?.Link?.url" target="_blank" class="text-blue-400">Link</a>-->


        </div>
        <div class="w-full mt-12">
            <h5 class="text-black mb-4">Others</h5>
            <div class="relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 justify-center flex-items-stretch">
                <NuxtLink v-for="item in store.getDBItemArr?.slice(0,3)" :to="`/works/${item.id}`">
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
    //color: #000;
    //border: 2px solid #000;
    //background: #fff;
}

.btn-3d-flip-back {
    transform: translateX(-1px) rotateY(90deg);
    transform-origin: 0 0;
}
</style>
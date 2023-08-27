<script setup lang="ts">
import {getItemText} from "~/utils/notionTransformData";

const route = useRoute()
import {useMainStore} from "~/store"

const store = useMainStore()
const {data: notionDB, error} = await useAsyncData('notionDB', () => store.fetchNotionDB())

const {
    data: notionPageBlock,
    error: notionPageBlockErr
} = await useAsyncData('notionPageBlock', () => store.fetchNotionPageBlock(<string>route.params.id))
const {
    data: notionPage,
    error: notionPageErr
} = await useAsyncData('notionPage', () => store.fetchNotionPage(<string>route.params.id))

// const json: notionBlock[] = [/* Your JSON data */];

</script>

<template>
    <div class="w-full flex flex-wrap text-left p-12">
        <h1 class="w-full text-[3.5rem] text-black mb-12">{{ getItemTitleText(notionPage) }}</h1>
        <div class="w-2/3 pr-12">
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
                <div id="image-container" class="relative w-full pb-[56.25%] overflow-hidden">
                    <img :src="getItemCover(notionPage)" alt="cover"/>
                </div>
                <div v-html="store.getNotionPageBlockHtml"></div>
            </div>
        </div>
        <div class="w-1/3 pr-8 text-left text-sm tracking-wide leading-relaxed space-y-12">
            <div>
                <h4 class="text-black mb-4">INTRODUCTION</h4>
                <div v-html="getItemText(notionPage)"></div>
            </div>

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
                            <span v-for="(tag,index) in item?.properties?.Tags?.multi_select"
                                  :class="`notion-bg-${tag.color}`"
                                  class="p-1 mr-1 rounded-md text-white">
                                {{ tag.name }}
                            </span>
                        </template>
                    </common-used-work-card>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
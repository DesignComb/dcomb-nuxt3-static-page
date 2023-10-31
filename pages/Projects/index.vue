<script setup lang="ts">
import {useMainStore} from "~/store"

const store = useMainStore()

await useAsyncData('notionDB', () => store.fetchNotionDB())
</script>

<template>
    <div class="w-full min-h-screen max-w-[1440px] mx-auto pt-8">
        <animate-section-expand-title>
            <template #enTitle>
                Projects
            </template>
            <template #title>
                作品
            </template>
        </animate-section-expand-title>
        <div class="relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-12 justify-center flex-items-stretch p-12 md:p-20 pt-0 md:pt-0">
            <nuxt-link v-for="item in store.getDBItemArr" :to="`/Projects/${item.id}`" :key="item.id" external>
                <common-used-work-card>
                    <template #cover>
                        <img :src="getItemCover(item)" alt="cover"/>
                    </template>
                    <template #title>
                        {{ getItemTitleText(item) }}
                    </template>
                    <template #tags>
                        <div v-for="(tag,index) in item?.properties?.Skill?.multi_select"
                             :class="`notion-bg-${tag.color}`"
                             class="inline-flex pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 text-[0.75rem] shadow-md text-black rounded-full border-solid border-[#666] border-2">
                            {{ tag.name }}
                        </div>
                    </template>
                </common-used-work-card>
            </nuxt-link>
        </div>
    </div>
</template>

<style scoped>

</style>
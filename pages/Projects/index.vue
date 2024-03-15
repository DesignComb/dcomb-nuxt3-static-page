<script setup lang="ts">
import {ref,computed} from 'vue'

import {useMainStore} from "~/store"

const store = useMainStore()

await useAsyncData('notionDB', () => store.fetchNotionDB())

const specialTags = ['Vue.js', 'Shopify', 'Laravel']

const isActiveTag = ref('ALL')

const filteredDBItem = computed(() => {
  let dbItem = store.getDBItemArr;
  // 如果isActiveTag是'ALL'，則返回所有項目，否則過濾出符合條件的項目。
  if (isActiveTag.value === 'ALL') {
    return dbItem;
  } else {
    return dbItem.filter((item: any) => {
      // 檢查是否至少有一個tag的name與isActiveTag相等。
      return item.properties.Skill.multi_select.some((tag: any) => {
        return tag.name === isActiveTag.value;
      });
    });
  }
});
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
<!--    {{filteredDBItem}}-->
    <div class="mb-1">
      <div class="inline-flex">
        <div :class="isActiveTag === 'ALL' ? 'op100 scale-105':'op60'"
             @click="isActiveTag = 'ALL'"
             class="bg-comb:25 pt-0.5 pb-1 px-3 mr-3 mb-1.5 shadow-md text-black rounded-full
             border-solid border-[#666] border-2 hover:op80 cursor-pointer">
          ALL
        </div>
      </div>
      <div v-for="(tag,index) in store.getDBItemAllTags" class="inline-flex">
        <div v-if="specialTags.includes(tag.name)"
             @click="isActiveTag = tag.name"
             :class="[isActiveTag === tag.name ? `op100 scale-105 notion-bg-${tag.color}`:'op60 ']"
             class="pt-0.5 pb-1 px-3 mr-3 mb-1.5 shadow-md text-black rounded-full
             border-solid border-[#666] border-2 hover:op80 cursor-pointer">
          {{ tag.name }}
        </div>
      </div>
    </div>
    <div class="mb-12">
      <div v-for="(tag,index) in store.getDBItemAllTags" class="inline-flex">
        <div v-if="!specialTags.includes(tag.name)"
             @click="isActiveTag = tag.name"
             :class="[isActiveTag === tag.name ? `op100 scale-105 notion-bg-${tag.color}`:'op60 scale-90']"
             class="pt-0.5 pb-1 px-3 mr-1.5 mb-1.5 shadow-md text-black rounded-full
             border-solid border-[#666] border-2 hover:op80 cursor-pointer">
          {{ tag.name }}
        </div>
      </div>
    </div>
    <TransitionGroup name="projects" tag="div"
        class="relative grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-12 justify-center flex-items-stretch p-12 md:p-20 pt-0 md:pt-0">
        <div v-for="item in filteredDBItem" :key="item.id" class="relative">
          <nuxt-link :to="`/Projects/${item.id}`" external>
            <common-used-work-card>
              <template #cover>
                <NuxtImg :src="getItemCover(item)" alt="cover"/>
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
    </TransitionGroup>
  </div>
</template>

<style scoped>
.projects-move {
  transition: all .5s ease-in-out
}
.projects-enter-active{
  transition: all .5s ease-in-out
}
.projects-leave-active {
  position: absolute;
}

.projects-enter-from{
  opacity: 0;
  transform: translateX(30px);
}
.projects-enter-to{
  opacity: 1;
}
.projects-leave-from {
  opacity: 0;
}
.projects-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
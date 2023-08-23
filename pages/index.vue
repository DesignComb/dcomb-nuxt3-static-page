<script setup>
import {useMainStore} from "~/store"

const store = useMainStore()

const {data: notionDB, error} = await useAsyncData('notionDB', () => store.fetchNotionDB())

const getItemCover = (item) => {
  if (item.cover) {
    if (item.cover.type === 'external') {
      return item.cover.external.url
    } else if (item.cover.type === 'file') {
      return item.cover.file.url
    } else {
      return ''
    }
  }
}
const getItemTitleText = (title) => {
  const combinedString = title.map(item => item?.plain_text).join('');
  return combinedString
}

</script>
<template>
  {{ store.getDBItemArr }}
  <!--    <div class="m-0 p-0 w-screen max-w-screen h-screen text-center">-->
  <!--        <div class="w-full h-full flex flex-row flex-wrap justify-center items-center bg-comb px-20 py-16">-->
  <!--            <div class="w-full h-full relative flex justify-center items-center bg-white border-solid border-#666 border-12px rounded-4.5rem">-->
  <!--                <ClientOnly>-->
  <!--                    <animate-slogan-writing/>-->
  <!--                    <animate-two-hexagan-collapse/>-->
  <!--                    <animate-grey-hexagon/>-->
  <!--                </ClientOnly>-->
  <!--                <img class="absolute right-12 bottom-12 h-72" src="/scrollLine.svg" alt="scrollLine">-->
  <!--                <div class="absolute right-10 bottom-12 w-8 h-72 bg-white z-20 an-show-line"></div>-->
  <!--            </div>-->
  <!--        </div>-->
  <!--        <div class="w-full h-96 absolute bg-gradient-to-b from-comb z-10">-->
  <!--            <img class="absolute left-12 top-40 w-56 opacity-10 rotate-45" src="/comb-bg.svg"-->
  <!--                 alt="background decoration">-->
  <!--        </div>-->
  <!--        <div class="w-full relative py-24 z-20">-->
  <!--            <h1 class="font-black">Our Work</h1>-->
  <div class="flex flex-wrap justify-center py-20">
    <NuxtLink v-for="item in store.getDBItemArr" :to="`/works/${item.id}`">
      <common-used-work-card>
        <template #cover>
          <img :src="getItemCover(item)" alt="cover"/>
        </template>
        <template #title>
          {{ getItemTitleText(item?.properties?.Name?.title) }}
        </template>
        <template #tags>
        <span v-for="(tag,index) in item?.properties?.Tags?.multi_select"
              :class="`notion-bg-${tag.color}`" class="p-1 mr-1 rounded-md">{{ tag.name }}</span>
        </template>
      </common-used-work-card>
    </NuxtLink>

    <!--                <div class="w-96 m-4"></div>-->
    <!--                <div class="w-96 m-4"></div>-->
    <!--                <div class="w-96 m-4"></div>-->
  </div>
  <!--        </div>-->
  <!--    </div>-->
  <span class="hidden notion-bg-default notion-bg-lightgray notion-bg-gray notion-bg-brown
               notion-bg-orange notion-bg-yellow notion-bg-green notion-bg-blue
               notion-bg-purple notion-bg-pink notion-bg-red"></span>
</template>

<style scoped>
.an-show-line {
  animation: shrink 2s forwards ease-in-out;
  animation-delay: 4s;
}

@keyframes shrink {
  to {
    height: 0;
  }
}
</style>
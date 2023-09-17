<script setup lang="ts">
import {useMainStore} from "~/store"

const store = useMainStore()

await useAsyncData('notionDB', () => store.fetchNotionDB())
</script>
<template>
  <div class="w-full min-h-screen flex flex-row flex-wrap justify-center items-center">
    <div
        class="w-full h-screen min-h-[60vw] flex flex-row flex-wrap justify-center items-center bg-comb px-8 py-6 mb-8 md:px-20 md:py-16">
      <div
          class="w-full max-w-content h-full relative flex justify-center items-center bg-white border-solid overflow-hidden border-#666 border-12px rounded-4.5rem">

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
          Services
        </template>
        <template #title>
          服務
        </template>
      </animate-section-expand-title>
      <div class="flex flex-wrap w-full items-end">
        <div class="w-full md:w-1/2 flex flex-wrap justify-end pl-12 pr-4 md:pl-20 pt-0 md:pt-0">
          <div class="bg-white w-full rounded-lg p-8 shadow-card text-left">
            <div class="text-3xl font-bold pb-8">
              一頁式<br>形象網站
            </div>
            <div class="text-xs">
              數位世界中的視覺門面<br>
              活動、主題網站和行銷著陸頁等<br><br>
              同時強化SEO，提高網站的搜索排名<br>
              大幅提升品牌的網路可見度<br>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 flex flex-wrap pr-12 pl-4 md:pr-20 pt-0 md:pt-0">
          <div class="bg-black w-full rounded-lg p-8 shadow-card text-right h-min">
            <div class="text-3xl text-comb pb-8 font-bold">
              客製化後台
            </div>
            <div class="text-white text-xs">
              為企業客製化業務運營中樞<br>
              管理人力、財務、客戶等<br>
              數據分析圖表一目了然<br>
              確保業務持續增長，不受技術限制<br>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-wrap justify-center md:py-8 pl-12 pr-4 md:px-20">
          <div class="bg-comb w-full md:w-1/2 rounded-lg p-8 shadow-card text-left">
            <div class="text-3xl text-white pb-8 font-bold">
              電商網頁
            </div>
            <div class="text-xs">
              透過卓越的用戶體驗<br>
              提高轉化率和客戶忠誠度<br>
              輕鬆管理庫存和訂單<br>
              無論規模大小，都能量身定制方案<br>
              創造倍數成長的業績<br>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full relative border-y-solid border-1">
      <common-used-marquee-line>
        <div class="flex items-center my-0.5">
          SERVICE <span class="text-comb text-xl ml-5 rotate-90">＊</span>
        </div>
      </common-used-marquee-line>
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
      <div
          class="relative mt-8 grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-12 justify-center flex-items-stretch p-12 md:p-20 pt-0 md:pt-0">
        <nuxt-link v-for="item in store.getDBItemArr" :to="`/works/${item.id}`" :key="item.id">
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

      <div class="w-full relative border-y-solid border-1">
          <common-used-marquee-line>
              <div class="flex items-center my-0.5">
                  PROJECTS <span class="text-comb text-xl ml-5 rotate-90">＊</span>
              </div>
          </common-used-marquee-line>
      </div>

    <div class="w-full max-w-content relative z-20">
      <animate-section-expand-title>
        <template #enTitle>
          Our Team
        </template>
        <template #title>
          團隊
        </template>
      </animate-section-expand-title>

      <div
          class="relative grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-20 justify-center flex-items-stretch px-12 md:px-32">
        <common-used-member-card>
          <template #avatar>
            <img class="px-12" src="/team-member-Eric.png" alt="team-member-hao"/>
          </template>
          <template #decoration>
            <div class="absolute top-[12%] left-[40%] text-xl font-bold mix-blend-screen">PATIENT</div>
            <div class="absolute top-[40%] left-[75%] text-xl font-bold mix-blend-screen">BUILD</div>
            <div class="absolute top-[80%] left-[30%] text-xl font-bold mix-blend-screen">FRONTEND</div>
          </template>
        </common-used-member-card>
        <common-used-member-card>
          <template #avatar>
            <img class="px-12" src="/team-member-hao.png" alt="team-member-hao"/>
          </template>
          <template #decoration>
            <div class="absolute top-[12%] left-[40%] text-xl font-bold mix-blend-screen">PUSH</div>
            <div class="absolute top-[40%] left-[5%] text-xl font-bold mix-blend-screen">BACKEND</div>
            <div class="absolute top-[80%] left-[55%] text-xl font-bold mix-blend-screen">DESIGN</div>
          </template>
        </common-used-member-card>

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

.slash-clip-path-left {
  clip-path: polygon(0 0, 100% 0, 100% 37.5%, 52.5% 100%, 0 100%, 0 0);
}

.slash-clip-path-right {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0 100%, 0 65%);
}

@keyframes shrink {
  to {
    height: 0;
  }
}

</style>
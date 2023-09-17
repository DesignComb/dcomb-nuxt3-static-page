<script setup lang="ts">

</script>

<template>
    <div class="w-full min-h-screen max-w-[1440px] mx-auto pt-8">
        <animate-section-expand-title>
            <template #enTitle>
                About Us
            </template>
            <template #title>
                關於
            </template>
        </animate-section-expand-title>
        <div class="w-full relative pb-12">
            蜂巢設計 (design comb)
            是由兩個工程師組成的團隊，致力於網站開發
        </div>
        <div class="w-full relative border-y-solid border-1">
            <common-used-marquee-line>
                <div class="flex items-center my-0.5">
                    About <span class="text-comb text-xl ml-5 rotate-90">＊</span>
                </div>
            </common-used-marquee-line>
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
</template>

<style scoped>

</style>
<script setup>
const {data, pending, error, refresh} = await useAsyncData(
    'mountains',
    () => $fetch('https://api.notion.com/v1/databases/5ad9018ec1a9408cbc7781197832c880/query', {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Authorization': 'Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog'
        }
    })
)
</script>
<template>
    <div class="m-0 p-0 w-screen max-w-screen h-screen text-center">
        <div class="w-full h-full flex flex-row flex-wrap justify-center items-center bg-comb px-20 py-16">
            <div class="w-full h-full relative flex justify-center items-center bg-white border-solid border-#666 border-12px rounded-4.5rem">
                <ClientOnly>
                    <animate-slogan-writing/>
                    <animate-two-hexagan-collapse/>
                    <animate-grey-hexagon/>
                </ClientOnly>
                <img class="absolute right-12 bottom-12 h-72" src="/scrollLine.svg" alt="scrollLine">
                <div class="absolute right-10 bottom-12 w-8 h-72 bg-white z-20 an-show-line"></div>
            </div>
        </div>
        <div class="w-full h-96 absolute bg-gradient-to-b from-comb z-10">
            <img class="absolute left-12 top-40 w-56 opacity-10 rotate-45" src="/comb-bg.svg"
                 alt="background decoration">
        </div>
        <div class="w-full relative py-24 z-20">
            <h1 class="font-black">Our Work</h1>
            <div class="flex flex-wrap justify-center py-20">
                <common-used-work-card v-for="item in 10"/>
                <div class="w-96 m-4"></div>
                <div class="w-96 m-4"></div>
                <div class="w-96 m-4"></div>
            </div>
        </div>
    </div>
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
<style>
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
div{
    box-sizing: border-box;
}
#__nuxt{
    margin: 0;
    padding: 0;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    text-align: center;
    box-sizing: border-box;
}
</style>
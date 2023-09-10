<script setup lang="ts">

</script>

<template>
    <div class="gradient-footer relative w-full flex items-end text-center h-[10vh] min-h-[20rem] overflow-hidden">
        <img class="w-full max-w-content sm:px-20 px-4" src="/DC-footer.svg" alt="hexagon">
        <div class="absolute text-center w-full mb-20 italic">
            <a href="mailto:designcomb@gmail.com" class="text-base font-bold hover:op80">designcomb@gmail.com</a>
            <div class="text-xs font-light">@ 2023 Design Comb</div>
        </div>
        <!--        <span class="text-[40rem] text-stroke-outline pl-32 font-Roboto_Mono text-stroke-1 text-stroke-black italic tracking-[10rem] font-extrabold text-transparent">DC</span>-->
    </div>
</template>

<style scoped>

.gradient-footer {
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 202, 132, 1) 100%);
}
</style>
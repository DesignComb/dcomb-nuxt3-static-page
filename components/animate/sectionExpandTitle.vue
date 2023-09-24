<script setup lang="ts">
import {invoke, until, useAnimate, useIntersectionObserver} from '@vueuse/core'

const target = ref(null)

const targetIsVisible = ref(false)

const {stop} = useIntersectionObserver(
    target,
    ([{isIntersecting}], observerElement) => {
        targetIsVisible.value = isIntersecting
    },
)
const el = ref()
const el2 = ref()
invoke(async () => {
    await until(targetIsVisible).toBe(true)
    useAnimate(el, {transform: 'translateX(-200%) skewX(-45deg)'}, {
        duration: 800,
        fill: 'forwards'
    })
    useAnimate(el2, {transform: 'translateX(100%) skewX(-45deg)'}, {
        duration: 800,
        fill: 'forwards'
    })
})
</script>

<template>
    <div class="relative scale-[0.75] mb--8 pt-12 sm:scale-[1] pointer-events-none">
        <div ref="el"
             class=" absolute translate-x-[-95%] skew-x-[-45deg] left-1/2 w-48 py-10 mt--8 bg-white flex justify-end z-30">
            <span class="font-black text-[3rem] text-[#666]">|</span>
        </div>
        <div ref="el2" class=" absolute left-1/2 w-48 skew-x-[-45deg] py-10 mt--8 bg-white flex justify-start z-30">
            <span class="font-black text-[3rem] text-[#666]">|</span>
        </div>
        <h1 class="font-black italic tracking-wide text-stroke-1 text-stroke-black font-Roboto text-[4rem] text-comb:25 z-10">
            <slot name="enTitle">Headline</slot>
        </h1>
        <h1 class="font-black text-[4rem] text-[#666] translate-y-[-135%] z-20">
            <slot name="title">標題</slot>
        </h1>
        <div ref="target"></div>
    </div>
</template>

<style scoped>

</style>
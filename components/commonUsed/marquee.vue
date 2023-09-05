<script setup lang="ts">
import {ref, onMounted, computed, nextTick} from 'vue'
import {useElementSize} from '@vueuse/core'

const marqueeContainer = ref(null)
const marqueeElements = ref([])

const {width: marqueeContainerWidth} = useElementSize(marqueeContainer)
const marqueeElementWidth = ref(0)

const marqueeElementRepeatCount = computed(() => {
    if (marqueeElementWidth.value) {
        return Math.ceil((marqueeContainerWidth.value / marqueeElementWidth.value))
    }
    return 1
})

const animationDuration = computed(() => {
    // Adjust the speed factor as needed
    const speedFactor = 20;
    return `${marqueeElementWidth.value * speedFactor}ms`;
})

onMounted(async () => {
    await nextTick();  // Ensure the DOM is updated
    if (marqueeElements.value[0]) {
        marqueeElementWidth.value = marqueeElements.value[0].offsetWidth
    }
})

</script>

<template>
  {{ marqueeElementRepeatCount }}
    <div ref="marqueeContainer" class="w-full whitespace-nowrap">
        <div class="inline-flex marquee-animation">
            <div
                    class="inline-flex"
                    v-for="n in marqueeElementRepeatCount"
                    :key="n"
                    ref="marqueeElements"
                    :style="{ animationDuration: animationDuration }"
            >
                PROJECT{{ n }} ＊
            </div>
        </div>
    </div>
</template>

<style scoped>
.marquee-animation {
    animation-name: marqueeMove;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}

@keyframes marqueeMove {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}
</style>

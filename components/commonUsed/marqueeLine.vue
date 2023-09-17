<script setup lang="ts">

import {ref, computed} from "vue";
import {useElementSize} from "@vueuse/core";

const marqueeContainer = ref(null)
const marqueeElements = ref(null)

const {width: marqueeContainerWidth} = useElementSize(marqueeContainer)
const {width: marqueeElementsWidth} = useElementSize(marqueeElements)

const marqueeElementRepeatCount = computed(() => {
  if (marqueeElementsWidth.value) {
    return Math.ceil((marqueeContainerWidth.value / marqueeElementsWidth.value))
  }
  return 1
})

const animationDuration = computed(() => {
  // Adjust the speed factor as needed
  const speedFactor = 2000;
  return `${marqueeElementRepeatCount.value * speedFactor}ms`;
})
</script>

<template>
  <div class="enable-animation">
    <div class="marquee marquee--hover-pause" ref="marqueeContainer">
      <ul class="marquee__content" :style="{animationDuration:animationDuration}">
        <li>
          <slot/>
        </li>
        <li
            v-for="n in marqueeElementRepeatCount"
            :key="n"
        >
          <slot/>
        </li>
      </ul>
      <ul aria-hidden="true" class="marquee__content" :style="{animationDuration:animationDuration}">
        <li ref="marqueeElements">
          <slot/>
        </li>
        <li v-for="n in marqueeElementRepeatCount"
            :key="n"
        >
          <slot/>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Marquee styles */
.marquee {
  --gap: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
  padding: 0;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

/* Pause animation when reduced-motion is set */
@media (prefers-reduced-motion: reduce) {
  .marquee__content {
    animation-play-state: paused !important;
  }
}

/* Enable animation */
.enable-animation .marquee__content {
  animation-name: scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* Reverse animation */
.marquee--reverse .marquee__content {
  animation-direction: reverse;
}

/* Pause on hover */
.marquee--hover-pause:hover .marquee__content {
  animation-play-state: paused;
}
</style>
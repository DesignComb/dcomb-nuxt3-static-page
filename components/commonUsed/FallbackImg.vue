<script setup lang="ts">
import {ref, watch} from 'vue'

const props = defineProps<{
    src?: string
}>()

const PRIMARY_PREFIX = 'dcomb-web.s3.ap-northeast-1.amazonaws.com/webp/'
const FALLBACK_PREFIX = 'dcomb-web-image.s3.ap-northeast-1.amazonaws.com/'

const currentSrc = ref(props.src)
const triedFallback = ref(false)

watch(() => props.src, (newSrc) => {
    currentSrc.value = newSrc
    triedFallback.value = false
})

const onError = () => {
    if (!triedFallback.value && currentSrc.value?.includes(PRIMARY_PREFIX)) {
        currentSrc.value = currentSrc.value.replace(PRIMARY_PREFIX, FALLBACK_PREFIX)
        triedFallback.value = true
    }
}
</script>

<template>
    <NuxtImg :src="currentSrc" @error="onError"/>
</template>

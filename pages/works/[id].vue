<script setup lang="ts">
const route = useRoute()
import {useMainStore} from "~/store"

const store = useMainStore()

const {data: notionPage, error} = await useAsyncData('notionPage', () => store.fetchNotionPage(route.params.id))
</script>

<template>
  123
  {{ route.params.id }}
  {{ notionPage }}
</template>

<style scoped>
</style>
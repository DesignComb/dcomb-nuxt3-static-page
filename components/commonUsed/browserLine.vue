<script setup lang="ts">
</script>

<template>
  <div class="h-8 border-solid border-black border-1 border-b-0 flex justify-between items-center">
    <div class="flex items-center">
      <div class="w-16 mx-4 flex justify-around">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div class="font-Orbitron">
        <slot/>
      </div>
    </div>
    <div class="flex h-full w-28 justify-between items-center">
      <div class="h-full flex items-center">
        <div class="i-bx-minus text-xl"/>
      </div>
      <div class="h-full flex items-center">
        <div class="i-bx-square text-xl"/>
      </div>
      <div class="h-full flex items-center bg-red-500">
        <div class="i-bx-x text-2xl text-white"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>
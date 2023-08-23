<script setup lang="ts">
</script>

<template>
  <div class="w-96 h-[20rem] bg-white border-solid border-black border-t-2 border-l-2 border-r-8 border-b-8 shadow-md m-4">
    <div id="image-container" class="relative w-full pb-[56.25%] overflow-hidden">
      <slot name="cover"/>
    </div>
    <h3><slot name="title"/></h3>
    <slot name="tags"/>
  </div>
</template>

<style>
#image-container img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;   /* or 'height: 100%;' based on your image's aspect ratio */
  object-fit: cover;
  object-position: center;
}
</style>
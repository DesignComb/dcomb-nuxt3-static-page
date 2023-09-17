<script setup lang="ts">
</script>

<template>
  <div class="relative w-full h-full moving-container">
    <div class="absolute flex w-full h-full">
      <svg width="100%" id="layer_1" data-name="layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 418.93 366"><title>
        hexagon-rounded-line</title>
        <path
            d="M199,238.94a23,23,0,0,0-19.51,10.82L83.32,403.85A23,23,0,0,0,83,427.7l96.56,163.92a23,23,0,0,0,19.82,11.32H382.76a23,23,0,0,0,20.11-11.83l91-163.93a23,23,0,0,0-.29-22.83L403,250.28a23,23,0,0,0-19.83-11.34Z"
            transform="translate(-78.83 -237.94)"
            style="fill:none;stroke:#040000;stroke-opacity:0.5299999713897705;stroke-width:2px"/>
      </svg>
    </div>
    <div class="max-w-128 relative h-full w-full text-left">
      <div id="image-container"
           class="relative w-full pb-[100%] overflow-hidden">
        <slot name="avatar"/>
      </div>
    </div>
    <slot name="decoration"/>
  </div>
</template>

<style>
#image-container img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* or 'height: 100%;' based on your image's aspect ratio */
  object-fit: cover;
  object-position: center;
}

@keyframes movingDashedBorder {
  to {
    stroke-dashoffset: 205%;
  }
}

.moving-container .moving-dashed-border {
  opacity: 0;
}

.moving-container:hover .moving-dashed-border {
  opacity: 1;
  animation: movingDashedBorder 4s infinite;
  animation-timing-function: ease-in-out;
}

.moving-container .moving-bg {
  transform: translate(5px, 5px);
  transition: transform 0.3s ease-in-out;
}

.moving-container:hover .moving-bg {
  transform: translate(0);
}
</style>
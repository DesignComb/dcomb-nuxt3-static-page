<script setup lang="ts">
</script>

<template>
    <div class="relative w-full h-full moving-container">
        <div class="absolute w-full h-full scale-105">
            <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
                <rect class="moving-dashed-border" width='100%' height='100%' fill='none' stroke='#fcba03'
                      stroke-width='25' stroke-dasharray='15% 185%'
                      stroke-dashoffset='5%' stroke-linecap='square'/>
            </svg>
        </div>
        <div class="absolute w-full max-w-128 h-full bg-black moving-bg"></div>
        <div class="max-w-128 relative min-h-[16rem] h-full w-full text-left bg-white border-2 border-black border-solid shadow-md">
            <div id="image-container"
                 class="relative w-full pb-[56.25%] overflow-hidden border-0 border-solid border-b-1">
                <slot name="cover"/>
            </div>
            <div class="p-4">
                <div class="mb-2 line-clamp-2 font-bold text-black text-base tracking-wide">
                    <slot name="title"/>
                </div>
                <slot name="tags"/>
            </div>
        </div>
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
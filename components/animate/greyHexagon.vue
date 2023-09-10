<script setup lang="ts">

</script>

<template>
    <div class="absolute left-8 bottom-10  w-56 h-56 scale-50 sm:scale-110 origin-bottom-left flex flex-col justify-end">
        <svg class="absolute -top-12 left-5 h-28 an-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.11 228.18">
            <title>資產 11</title>
            <g id="圖層_2" data-name="圖層 2">
                <g id="圖層_1-2" data-name="圖層 1">
                    <line class="cls-3-1" x1="40.33" y1="226.69" x2="4.77" y2="112.49"/>
                    <line class="cls-3-1" x1="4.77" y1="115.69" x2="40.33" y2="1.49"/>
                </g>
            </g>
        </svg>
        <svg class="w-32 h-32 z-20 an-front" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.41 215.5">
            <title>資產 10</title>
            <g id="圖層_2" data-name="圖層 2">
                <g id="圖層_1-2" data-name="圖層 1">
                    <polygon class="cls-1-1"
                             points="175.81 215.5 58.6 215.5 0 107.75 58.6 0 175.81 0 234.41 107.75 175.81 215.5"/>
                </g>
            </g>
        </svg>
        <svg class="absolute left-9 bottom-7 w-32 an-back" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 245.86 337.19">

            <title>資產 12</title>
            <g id="圖層_2" data-name="圖層 2">
                <g id="圖層_1-2" data-name="圖層 1">
                    <path class="cls-2-1"
                          d="M181.53,325.19H64.33l5.18,3L18.17,233.78,10.9,220.41v6.06l51.34-94.38,7.27-13.37-5.18,3h117.2l-5.18-3,51.33,94.39L235,226.47v-6.06L183.62,314.8l-7.27,13.36C172.66,335,183,341,186.71,334.22l51.82-95.28c2.22-4.07,4.93-8.14,6.75-12.41,2.05-4.81-1.87-9.62-4.13-13.78l-29.9-55-24.54-45.12a6,6,0,0,0-5.18-3H64.33a6,6,0,0,0-5.19,3L7.32,207.94C5.11,212,2.39,216.09.58,220.35c-2.06,4.81,1.87,9.62,4.13,13.78l29.89,55,24.54,45.13a6,6,0,0,0,5.19,3h117.2C189.25,337.19,189.27,325.19,181.53,325.19Z"/>
                    <line class="cls-2-2" x1="64.2" y1="115.69" x2="28.64" y2="1.49"/>
                </g>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.an-top {
    opacity: 0;
    transform: translate(-1rem,0%);
    animation: return-origin 1.2s forwards ease-in-out;
}

.an-front {
    opacity: 0;
    transform: translate(-1rem,1rem);
    animation: return-origin 1.2s forwards ease-in-out;
}

.an-back {
    opacity: 0;
    transform: translate(1rem,-1rem);
    animation: return-origin 1.2s forwards ease-in-out;
}

@keyframes return-origin {
    to {
        opacity: 1;
        transform: translate(0,0);
    }
}

.cls-1-1 {
    fill: #666;
}

.cls-2-1 {
    fill: #999;
}

.cls-2-2 {
    fill: none;
    stroke: #999;
    stroke-miterlimit: 10;
    stroke-width: 10px;
}

.cls-3-1 {
    fill: none;
    stroke: #999;
    stroke-miterlimit: 10;
    stroke-width: 10px;
}
</style>
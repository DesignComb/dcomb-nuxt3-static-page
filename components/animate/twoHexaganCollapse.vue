<script setup lang="ts">

</script>

<template>
    <div class="absolute flex right-10 top-14 w-72 h-32 scale-70 md:scale-110">
        <img class="w-32 absolute left-12 an-left z-20" src="/images/hexagon-outline.svg" alt="hexagon"/>
        <img class="h-6.5rem absolute top-1 left-7.1rem  an-center" src="/images/yellow-diamond.svg" alt="diamond"/>
        <img class="w-32 absolute right-12 an-right z-20" src="/images/hexagon-outline.svg" alt="hexagon"/>
    </div>
</template>

<style scoped>
.an-left{
    animation: collapse-left 5s forwards ease infinite;
}
.an-right{
    animation: collapse-right 5s forwards ease infinite;
}
.an-center{
    animation: zoom-infinite 5s forwards ease infinite;
}
@keyframes collapse-left {
    0%{
        transform:translateX(-2rem);
    }
    70%{
        transform: translate(0,0) scale(100%);
    }
    100%{
        transform:translateX(-2rem);
    }
}
@keyframes collapse-right {
    0%{
        transform:translateX(2rem);
    }
    70%{
        transform: translate(0,0) scale(100%);
    }
    100%{
        transform:translateX(2rem);
    }
}
@keyframes zoom-infinite {
    0%{
        transform: scale(1%);
    }
    70%{
        transform: translate(0,0) scale(98%);
    }
    100%{
        transform: scale(1%);
    }
}
@keyframes return-origin {
    to {
        transform: translate(0,0) scale(100%);
    }
}
</style>
<script setup lang="ts">

</script>

<template>
    <div class="max-w-content px-12 py-3 flex justify-end">
        <nuxt-link to="/" class="decoration-clip-border relative mr-6">
            <div class="decoration-clip-path italic font-bold tracking-wide relative px-10 py-1 hover:bg-comb hover:text-white transition hover:transition-delay-300 duration-500 ease-in-out border-box">
                About
            </div>
        </nuxt-link>
        <nuxt-link to="/" class="decoration-clip-border relative mr-6">
            <div class="decoration-clip-path italic font-bold tracking-wide relative px-10 py-1 hover:bg-comb hover:text-white transition hover:transition-delay-300 duration-500 ease-in-out border-box">
                Projects
            </div>
        </nuxt-link>
        <nuxt-link to="/" class="decoration-clip-border relative mr-6">
            <div class="decoration-clip-path italic font-bold tracking-wide relative px-10 py-1 hover:bg-comb hover:text-white transition hover:transition-delay-300 duration-500 ease-in-out border-box">
                Contact
            </div>
        </nuxt-link>
    </div>
</template>

<style scoped>
.decoration-clip-path {
    clip-path: polygon(15% 0, 100% 0, 100% 72.5%, 85% 100%, 0 100%, 0 27.5%);
}

.decoration-clip-border:after,
.decoration-clip-border:before {
    box-sizing: border-box;
    position: absolute;
    content: '';
    width: 1px;
    height: 60%;
    background-color: black;
    transform: rotate(40deg);
    z-index: 10;
    transition: all 0.5s ease-in-out; /* 添加透明度過渡效果 */
}

.decoration-clip-border:after {
    top: 40%;
    left: 85%;
}

.decoration-clip-border:before {
    top: 5%;
    left: 15%;
}

.decoration-clip-border:hover:before{
    top: 55%;
    left: 0%;
    opacity: 0; /* 懸停時將:before和:after元素的透明度設為0 */
}
.decoration-clip-border:hover:after {
    top: -10%;
    left: 100%;
    opacity: 0; /* 懸停時將:before和:after元素的透明度設為0 */
}
</style>
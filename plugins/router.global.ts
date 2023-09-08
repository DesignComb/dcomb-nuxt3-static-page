export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:finish', () => {
        console.log('回去了')
        setTimeout(() => window.scrollTo({ top: 0, left: 0 }), 300);
    });
});
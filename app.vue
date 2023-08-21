<script setup>
const { data, pending, error, refresh } = await useAsyncData(
    'mountains',
    () => $fetch('https://api.notion.com/v1/databases/5ad9018ec1a9408cbc7781197832c880/query',{
      method:'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Authorization': 'Bearer secret_8Ujk50jsgGBNH8x1D8pi3DKB1ppeIRHAs9XNdMCoyog'
      }
    })
)
</script>
<template>
  <div>
    {{data}}
    <NuxtWelcome />
  </div>
</template>

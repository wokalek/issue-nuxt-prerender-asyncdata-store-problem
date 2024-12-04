<template>
  <div>
    <h1>Product Detail</h1>
    <NuxtLink :to="{ name: 'index'}">To Home</NuxtLink>
    <pre>{{ item }}</pre>
    <pre>{{ item.tags }}</pre>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const catalogStore = useCatalogStore()

const item = computed(() => catalogStore.item)

await useAsyncData(() => catalogStore.getProduct(route.params.slug as string))
</script>

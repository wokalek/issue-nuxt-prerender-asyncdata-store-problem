<template>
  <div>
    <h1>Home</h1>
    <NuxtLink :to="{ name: 'product-slug', params: { slug: 'my-product' } }">To Product</NuxtLink>
    <div>Reproduction: just go to To Product route in generated project</div>
  </div>
</template>

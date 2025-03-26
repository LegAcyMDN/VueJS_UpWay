<script setup>
defineProps({
  article: {
    required: true,
  },
})
</script>

<template>
    <article>
    <div>
      <h2>{{article.caa_titre}}</h2>
      <p>{{article.caa_contenue}}</p>
      <img :src="article.caa_image">
    </div>
    </article>
</template>

<style scoped>
</style>
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
      <h2>{{article.titreCategorieArticle}}</h2>
      <p>{{article.contenuCategorieArticle}}</p>
      <img :src="article.imageCategorie">
    </div>
    </article>
</template>

<style scoped>
</style>
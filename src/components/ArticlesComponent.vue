<script setup>
import { ref, watch } from 'vue'
import { toRefs } from '@vue/reactivity'
defineProps({
  article: {
    required: true,
  },
  link:
  {
    required : true,
  }
})
</script>

<template>
    <router-link :to="link">
    <div>
      <h2>{{article.titreCategorieArticle}}</h2>
      <img :src="article.imageCategorie" alt="Image de l'article">
    </div>
  </router-link>
</template>

<style scoped>
</style>
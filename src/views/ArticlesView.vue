<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCategorieArticleStore } from '@/stores/categoriearticles'
import ArticlesComponent from '@/components/ArticlesComponent.vue'

const articles = useCategorieArticleStore()
const nouvelart = ref({
  titreCategorieArticle: '',
  contenuCategorieArticle: '',
  imageCategorie: '',
})
</script>

<template>
  <main>
    <h1 class="titre">Articles</h1>
    <ArticlesComponent 
    :key="article.categorieArticleId"
    v-for="article in articles.list" 
    :article="article"
    :link="{path: '/article/' + article.categorieArticleId}"/>
  </main>
</template>

<style>
.titre
{
  text-align: center;
}
</style>

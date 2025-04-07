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
  <article>
    {{ nouvelart.titreCategorieArticle }}
    <button @click="articles.ajouter">Ajouter un nouvel article</button>
    <input v-model="nouvelart.titreCategorieArticle" />
    <input v-model="nouvelart.contenuCategorieArticle" />
    <input v-model="nouvelart.imageCategorie" />
  </article>
  <main>
    <p>Articles</p>
    <ArticlesComponent 
    :key="article.categorieArticleId"
    v-for="article in articles.list" :article="article"
    :title="article.titreCategorieArticle"
    :content="article.content"
    :link="{path: '/article/' + article.categorieArticleId}"/>
  </main>
</template>
<style></style>

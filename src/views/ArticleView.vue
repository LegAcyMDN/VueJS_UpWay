<script setup>
import { ref } from 'vue'
import { useArticleStore } from '@/stores/articles'
import ArticleComponent from '@/components/ArticleComponent.vue'
const articles = useArticleStore()
const nouvelart = ref({
  titreCategorieArticle: '',
  contenuCategorieArticle: '',
  imageCategorie: '',
})
</script>

<template>
  <main>
    <p>Articles</p>
    <ArticleComponent v-for="article in articles.list" :article="article" />
  </main>
  <article>
    {{ nouvelart.titreCategorieArticle }}
    <button @click="articles.ajouter">Ajouter un nouvel article</button>
    <input v-model="nouvelart.titreCategorieArticle" />
    <input v-model="nouvelart.contenuCategorieArticle" />
    <input v-model="nouvelart.imageCategorie" />
  </article>
</template>
<style></style>

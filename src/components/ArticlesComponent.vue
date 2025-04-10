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
  <div class="articles-wrapper">
    <router-link class="article-link" :to="link">
        <div class="article-container">
            <h2 class="article-title">{{ article.titreCategorieArticle }}</h2>
            <img class="article-image" :src="article.imageCategorie" alt="Image de l'article">
        </div>
    </router-link>
  </div>
</template>

<style scoped>
.articles-wrapper {
    display: flex; 
    justify-content: center; 
    flex-wrap: wrap; 
}

.article-link {
    text-decoration: none; 
    color: inherit; 
    width: 50%;
    max-width: 600px; 
    margin: 10px;
}

.article-container {
    border: 1px solid #ddd; 
    border-radius: 8px; 
    overflow: hidden; 
    transition: transform 0.3s, box-shadow 0.3s; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
    text-align: center; 
}

.article-container:hover {
    transform: translateY(-5px); 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); 
}


.article-title {
    font-size: 2em; 
    margin: 10px; 
    color: #333; 
}


.article-image {
    width: 100%; 
    height: auto; 
    display: block; 
}
</style>
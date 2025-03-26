<script setup>
//import HelloWorld from '../components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useArticleStore } from '@/stores/articles';
import ArticleComponent from '@/components/ArticleComponent.vue';
const articles = useArticleStore()
</script>

<template>
  <main>
    <p>Articles</p>
    <ArticleComponent v-for="article in articles.listarticle":article="article"/>
  </main>
</template>

<style>
</style>
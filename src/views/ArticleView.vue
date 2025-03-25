<script setup>
//import HelloWorld from '../components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useArticleStore } from '@/stores/articles';
import ArticleComponent from '@/components/ArticleComponent.vue';
const articles = useArticleStore()
</script>

<template>
  <main>
    <p>Article</p>
    <ArticleComponent v-for="article in articles.listarticle":article="article"/>
  </main>
</template>

<style>
</style>
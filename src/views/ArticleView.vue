<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCategorieArticleStore } from '@/stores/categoriearticles'
import Article from '@/components/Article.vue'
import { useContentArticleStore } from '@/stores/contentarticles'
import { useArticleStore } from '@/stores/articles'

const categoryArticles = useCategorieArticleStore()
const nouvelart = ref({
  titreCategorieArticle: '',
  contenuCategorieArticle: '',
  imageCategorie: '',
})

const route = useRoute()
const id = route.params.id
const contenustore = useContentArticleStore()

const articlestore = useArticleStore()

const contenus = ref({})
const catarticle = ref({})
const art = ref({})

categoryArticles.getById(id).then((data) => {
  catarticle.value = data
  articlestore.getByCategoryArticleId(catarticle.value.categorieArticleId).then((data) => 
  {
    art.value = data
    contenustore.getByArticleId(art.value.articleId).then((data) =>
    {
      contenus.value = data
    })
  })
})
</script>

<template>
  <main>
    <Article
    :title="catarticle.titreCategorieArticle"
    :content="catarticle.contenuCategorieArticle"/>
    <div>
    {{ contenus.contenu }}
  </div>
  </main>
</template>
<style></style>

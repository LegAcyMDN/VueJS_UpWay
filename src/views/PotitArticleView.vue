<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCategorieArticleStore } from '@/stores/categoriearticles'
import PotitArticleComponent from '@/components/PotitArticleComponent.vue'
import { useContentArticleStore } from '@/stores/contentarticles'
import { useArticleStore } from '@/stores/articles'

const categoryArticles = useCategorieArticleStore()

const route = useRoute()
const id = route.params.id
const contenustore = useContentArticleStore()

const articlestore = useArticleStore()

const contenus = ref({})
const catarticle = ref({})
const art = ref({})


    contenustore.getByArticleId(id).then((data) =>
    {
      contenus.value = data
    })
</script>

<template>
  <main>
    <PotitArticleComponent
    :lists="contenus"/>
  </main>
</template>
<style></style>

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useArticleStore = defineStore('article',() =>{
  const urlBase = "https://s401-dev.redboxing.moe/api/"
  const listarticle =ref([])
  const connected = ref(false)

  axios.get(urlBase+"CategorieArticles").then
  (
    response =>
      {
        listarticle.value = response.data
      }
  )
return {listarticle, connected}
})
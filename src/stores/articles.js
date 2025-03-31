import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('article', () => {
  const listarticle = ref([])
  const connected = ref(false)

  axios.get(`${window.VITE_BACKEND_URL}/CategorieArticles`).then((response) => {
    listarticle.value = response.data
  })
  return { listarticle, connected }
})

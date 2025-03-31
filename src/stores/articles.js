import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('articles', () => {
  const list = ref([])

  axios.get(`${window.VITE_BACKEND_URL}/CategorieArticles`).then((response) => {
    list.value = response.data
  })

  async function getById(id) {
    return (await axios.get(`${window.VITE_BACKEND_URL}/CategorieArticles/GetByID/${id}`)).data
  }

  return { listarticle, getById }
})

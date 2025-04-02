import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('article_categories', () => {
  const list = ref([])

  async function add(article) {
    await axios.post(`${window.VITE_BACKEND_URL}/CategorieArticles`, article)
  }

  fetchArticles(0)

  async function getById(id) {
    const entry = list.value.find((v) => v.categorieArticleId == id)
    if (entry != undefined) return entry

    return (await axios.get(`${window.VITE_BACKEND_URL}/CategorieArticles/GetByID/${id}`)).data
  }

  async function fetchArticles(page) {
    list.value = (await axios.get(`${window.VITE_BACKEND_URL}/CategorieArticles?page=${page}`)).data
  }

  return { list, add, getById, fetchArticles }
})

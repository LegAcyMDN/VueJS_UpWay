import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useContentArticleStore = defineStore('article_content', () => {
  const list = ref([])

  async function add(article) {
    await axios.post(`${window.VITE_BACKEND_URL}/`, article)
  }

  fetchArticles(0)

  async function getById(id) {
    const entry = list.value.find((v) => v.contenueId == id)
    if (entry != undefined) return entry

    return (await axios.get(`${window.VITE_BACKEND_URL}/ContenuArticles/${id}`)).data
  }
  async function getByArticleId(id) {
    const entry = list.value.find((v) => v.articleId == id)
    if (entry != undefined) return entry

    return (await axios.get(`${window.VITE_BACKEND_URL}/ContenuArticles/GetByArticleID/${id}`)).data
  }

  async function fetchArticles(page) {
    list.value = (await axios.get(`${window.VITE_BACKEND_URL}/ContenuArticles?page=${page}`)).data
  }
  return { list, add, getById, fetchArticles, getByArticleId }
})
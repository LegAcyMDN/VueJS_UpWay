import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('articles', () => {
  const list = ref([])
  const token = ref($cookies.get('jwt_token'))

  async function add(article) {
    await axios.post(`${window.VITE_BACKEND_URL}/Articles`, article)
  }

  fetchArticles(0)

  async function getById(id) {
    const entry = list.value.find((v) => v.articleId == id)
    if (entry != undefined) return entry

    return (await axios.get(`${window.VITE_BACKEND_URL}/Articles/${id}`)).data
  }
  async function getByCategoryArticleId(id) {
    const entry = list.value.find((v) => v.categorieArticleId == id)
    if (entry != undefined) return entry

    return (await axios.get(`${window.VITE_BACKEND_URL}/Articles/${id}`)).data
  }

  async function fetchArticles(page) {
    list.value = (await axios.get(`${window.VITE_BACKEND_URL}/Articles?page=${page}`)).data
  }

  async function fetchAll() {
    const response = await axios.get(`${window.VITE_BACKEND_URL}/Articles`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      withCredentials: true,
    });
    list.value = response.data;
  }
  return { list, add, getById, fetchArticles, getByCategoryArticleId,fetchAll }
})
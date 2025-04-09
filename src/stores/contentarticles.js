import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useContentArticleStore = defineStore('article_content', () => {
  const list = ref([])
  const token = ref($cookies.get('jwt_token'))

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

  async function fetchAllPages() {
    try {
      const count = await axios.get(`${window.VITE_BACKEND_URL}/ContenuArticles/count`);
      const total = parseInt(count.data);
      const totalPages = Math.ceil(total / 20);
  
      let allMarques = [];
      for (let page = 0; page < totalPages; page++) {
        const res = await axios.get(`${window.VITE_BACKEND_URL}/ContenuArticles?page=${page}`);
        allMarques = allMarques.concat(res.data);
      }
  
      list.value = allMarques;
    } catch (error) {
      console.error("Erreur lors du chargement des marques :", error.message);
    }
  }

  async function deleteContent(id) {
    try {
      for (const contenu of list.value) {
        if (contenu.articleId === id) {
          await axios.delete(`${window.VITE_BACKEND_URL}/ContenuArticles/${contenu.contenueId}`, {
            headers: {
              Authorization: `Bearer ${token.value}`,
            },
            withCredentials: true,
          });
          console.log("Contenu supprimé avec succès !");
        }
      }
      await fetchAll();
    } catch (error) {
      console.error("Erreur lors de la suppression du contenu :", error.response?.data || error.message);
    }
  }
  


  async function fetchAll() {
    const response = await axios.get(`${window.VITE_BACKEND_URL}/ContenuArticles`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      withCredentials: true,
    });
    list.value = response.data;
  }

  return { list, add, getById, fetchArticles, getByArticleId, fetchAllPages, deleteContent, fetchAll }
})
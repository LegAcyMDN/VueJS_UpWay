import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategorieArticleStore = defineStore('article_categories', () => {
  const list = ref([])
  const token = ref($cookies.get('jwt_token'))

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

  async function post(nom, contenue, url) {
    if (!nom || nom.trim().length === 0) {
      console.error("Le nom de la categorie est vide.");
      return;
    }
    const categorie = {
      titreCategorieArticle: nom,
      contenuCategorieArticle : contenue,
      imageCategorie : url,
    };
    
    try {
      await axios.post(`${window.VITE_BACKEND_URL}/CategorieArticles`, categorie, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        withCredentials: true,
      });
      await fetchAll();
      console.log("Catégorie créée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la création :", error.response?.data || error.message);
    }
  }
  
  async function deleteCategorie(id){
    await axios.delete(`${window.VITE_BACKEND_URL}/CategorieArticles/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      withCredentials: true,
    });
    await fetchAll();
  }
  async function fetchAll() {
    const response = await axios.get(`${window.VITE_BACKEND_URL}/Categories`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      withCredentials: true,
    });
    list.value = response.data;
  }
  return { list, add, getById, fetchArticles, post, deleteCategorie, fetchAll }
})

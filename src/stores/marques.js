import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMarquesStore = defineStore('marques', () => {
  const list = ref([])
  const current_page = ref(0)
  const total_pages = ref(0)
  fetchMarque(0)
  count()

  axios.get(`${window.VITE_BACKEND_URL}/Marques`).then((response) => {
    list.value = response.data
  })

  async function getById(id) {
    let entry = list.value.find((v) => v.marqueId == id)

    if (entry != undefined) {
      return entry
    }

    entry = (await axios.get(`${window.VITE_BACKEND_URL}/Marques/GetById/${id}`)).data
    console.log(entry)

    if (list.value.length >= 100) {
      list.value = [entry]
    } else {
      list.value.push(entry)
    }

    return entry
  }

  async function fetchMarque(page) {
    list.value = (await axios.get(`${window.VITE_BACKEND_URL}/Marques?page=${page}`)).data
    current_page.value = page
  }

  async function count() {
    count = parseInt((await axios.get(`${window.VITE_BACKEND_URL}/Marques/count`)).data)
    total_pages.value = Math.floor(count / 20)

    return count
  }

  async function post(nom) {
    if (!nom || nom.trim().length === 0) {
      console.error("Le nom de la catégorie est vide.");
      return;
    }
    const category = {
      libelleCategorie: nom
    };
    
    try {
      await axios.post(`${window.VITE_BACKEND_URL}/Categories`, category, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        withCredentials: true,
      });
      console.log("Catégorie créée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la création :", error.response?.data || error.message);
    }
  }
  
  async function deleteMarque(id){
    await axios.delete(`${window.VITE_BACKEND_URL}/Marque/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      withCredentials: true,
    });
  }

  return { list, current_page, total_pages , getById, fetchMarque, count, post, deleteMarque }
})

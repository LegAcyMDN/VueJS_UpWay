import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMarquesStore = defineStore('marques', () => {
  const list = ref([])
  const current_page = ref(0)
  const total_pages = ref(0)
  const token = ref($cookies.get('jwt_token'))
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
      console.error("Le nom de la marque est vide.");
      return;
    }
    const marque = {
      nomMarque: nom
    };
    
    try {
      await axios.post(`${window.VITE_BACKEND_URL}/Marques`, marque, {
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
  
  async function deleteMarque(id){
    await axios.delete(`${window.VITE_BACKEND_URL}/Marques/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      withCredentials: true,
    });
    console.log("Marque supprimer avec succès !");
    await fetchAll();
  }
  async function fetchAll() {
    const response = await axios.get(`${window.VITE_BACKEND_URL}/Marques`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      withCredentials: true,
    });
    list.value = response.data;
  }

  async function fetchAllPages() {
    try {
      const count = await axios.get(`${window.VITE_BACKEND_URL}/Marques/count`);
      const total = parseInt(count.data);
      const totalPages = Math.ceil(total / 20); // si 20 éléments/page
  
      let allMarques = [];
      for (let page = 0; page < totalPages; page++) {
        const res = await axios.get(`${window.VITE_BACKEND_URL}/Marques?page=${page}`);
        allMarques = allMarques.concat(res.data);
      }
  
      list.value = allMarques;
    } catch (error) {
      console.error("Erreur lors du chargement des marques :", error.message);
    }
  }
  

  return { list, current_page, total_pages , getById, fetchMarque, count, post, deleteMarque, fetchAll, fetchAllPages }
})

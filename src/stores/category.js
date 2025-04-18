import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoriesStore = defineStore('categories', () => {
  const list = ref([])
  const token = ref($cookies.get('jwt_token'))

  axios.get(`${window.VITE_BACKEND_URL}/Categories`).then((response) => {
    list.value = response.data
  })

  async function getById(id) {
    let entry = list.value.find((v) => v.categorieId == id)

    if (entry != undefined) {
      return entry
    }

    entry = (await axios.get(`${window.VITE_BACKEND_URL}/Categories/GetById/${id}`)).data
    console.log(entry)

    if (list.value.length >= 100) {
      list.value = [entry]
    } else {
      list.value.push(entry)
    }

    return entry
  }

  async function post(nom) {
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
      await fetchAll();
      console.log("Catégorie créée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la création :", error.response?.data || error.message);
    }
  }
  
  async function deleteCategory(id){
    await axios.delete(`${window.VITE_BACKEND_URL}/Categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      withCredentials: true,
    });
    console.log("Catégorie supprimer avec succès !");
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


  return { list, getById, post, deleteCategory, fetchAll}
})

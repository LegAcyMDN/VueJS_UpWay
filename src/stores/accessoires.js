import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from '@/stores/user.js'

const CACHE_SIZE = 200

export const useAccessoiresStore = defineStore('accesoires', () => {
  const list = ref([])
  const photos = ref([])
  const current_page = ref(0)
  const total_pages = ref(0)

  fetchAccessories(0)
  count()

  async function add(accessoire) {
    await axios.post(`${window.VITE_BACKEND_URL}/Accessoires`, accessoire)
  }

  async function post(marque, categorie,nom, prix, description) {
    const userStore = useUserStore()
    if (!nom || nom.trim().length === 0) {
      console.error("Le nom de la categorie est vide.");
      return;
    }
    const accessoire = {
      marqueId: marque,
      categorieId: categorie,
      nomAccessoire: nom,
      prixAccessoire : prix,
      descriptionAccessoire : description,
    };
    
    try {
      await axios.post(`${window.VITE_BACKEND_URL}/Accessoires`, accessoire, {
        headers: {
          Authorization: `Bearer ${userStore.token}`,
        },
        withCredentials: true,
      });
      await fetchAll();
      console.log("Catégorie créée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la création :", error.response?.data || error.message);
    }
  }

  async function deleteAccessoire(id) {
    try {
      await axios.delete(`${window.VITE_BACKEND_URL}/Accessoires/${id}`)
      await fetchAccessories(current_page.value)
    } catch (err) {
      console.error("Erreur lors de la suppression :", err)
      alert("Échec de la suppression de l'accessoire.")
    }
  }

  async function getById(id) {
    const entry = list.value.find((v) => v.accessoireId == id)
    if (entry != undefined) return entry

    return (await axios.get(`${window.VITE_BACKEND_URL}/Accessoires/GetById/${id}`)).data
  }

  async function getPhotosById(id) {
    let entries = photos.value[id]

    if (entries != undefined && entries.length > 0) {
      return entries
    }

    entries = (await axios.get(`${window.VITE_BACKEND_URL}/Accessoires/GetPhotosById/${id}`)).data

    if (Object.keys(photos.value).length >= CACHE_SIZE) {
      photos.value = { id: entries }
    } else {
      photos.value[id] = entries
    }

    return entries
  }

  async function getPhotosByIds(ids) {
    const photoEntries = {}

    for (const id of ids.slice()) {
      let entries = photos.value[id]

      if (entries != undefined && entries.length > 0) {
        photoEntries[id] = entries

        const index = ids.indexOf(id)
        if (index > -1) {
          ids.splice(index, 1)
        }
      }
    }

    let newEntries = {}
    if (ids.length > 0) {
      newEntries = (await axios.post(`${window.VITE_BACKEND_URL}/Accessoires/GetPhotosByIds`, ids))
        .data
    }
    const entries = { ...photoEntries, ...newEntries }

    if (Object.keys(photos.value).length >= CACHE_SIZE) {
      photos.value = entries
    } else {
      photos.value = { ...photos.value, ...newEntries }
    }

    return entries
  }

  async function getByCategoryPrix(categoryId, min, max, page = 0) {
    list.value = (await axios.get(
      `${window.VITE_BACKEND_URL}/Accessoires/GetByCategoryPrix`,
      {
        params: { categoryId, min, max, page }
      }
    )).data
    current_page.value = page
  }

  async function fetchAccessories(page) {
    list.value = (await axios.get(`${window.VITE_BACKEND_URL}/Accessoires?page=${page}`)).data
    current_page.value = page
  }

  async function fetchAll() {
    const userStore = useUserStore()
    const response = await axios.get(`${window.VITE_BACKEND_URL}/Accessoires`, {
      headers: {
        Authorization: `Bearer ${userStore.token}`,
      },
      withCredentials: true,
    });
    list.value = response.data;
  }

  async function count() {
    count = parseInt((await axios.get(`${window.VITE_BACKEND_URL}/Accessoires/count`)).data)
    total_pages.value = Math.floor(count / 20)

    return count
  }

  return {
    list,
    add,
    post,
    deleteAccessoire,
    getPhotosById,
    getPhotosByIds,
    getById,
    getByCategoryPrix,
    fetchAccessories,
    count,
    fetchAll,
    current_page,
    total_pages,
  }
})

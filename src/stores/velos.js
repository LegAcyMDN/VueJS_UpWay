import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from '@/stores/user.js'

const CACHE_SIZE = 200

export const useVelosStore = defineStore('velos', () => {
  const list = ref([])
  const photos = ref([])
  const cart = ref([])
  const current_page = ref(0)
  const total_pages = ref(0)
  const mention = ref([])
  const caracteristique = ref([])

  fetchBikes(0)
  count()

  function add(velo) {
    return axios.post(`${window.VITE_BACKEND_URL}/Velos`, velo.value)
  }

  async function post(marque, categorie, moteur, caracteristiqueVelo, nom, annee, tailleMin, tailleMax, 
    nombreKms, prixRemise, prixNeuf, pourcentageReduction, description, quantiteVelo, positionMoteur, capaciteBatterie) {
    const userStore = useUserStore()
    if (!nom || nom.trim().length === 0) {
      console.error("Le nom de la categorie est vide.");
      return;
    }
    const accessoire = {
      marqueId: marque,//
      categorieId: categorie,//
      moteurId: moteur,
      caracteristiqueVeloId: caracteristiqueVelo,
      nomVelo: nom,//
      anneeVelo: annee,
      tailleMin: tailleMin,
      tailleMax: tailleMax,
      nombreKms: nombreKms,
      //
      prixRemise: prixRemise,
      prixNeuf: prixNeuf,
      pourcentageReduction: pourcentageReduction, 
      descriptifVelo : description,//
      quantiteVelo: quantiteVelo,
      positionMoteur: positionMoteur,
      capaciteBatterie: capaciteBatterie,
    };
    
    try {
      await axios.post(`${window.VITE_BACKEND_URL}/Velos`, velo, {
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

  async function deleteVelo(id) {
    try {
      const userStore = useUserStore();
      await axios.delete(`${window.VITE_BACKEND_URL}/Velos/${id}`, {
        headers: {
          Authorization: `Bearer ${userStore.token}`,
        },
        withCredentials: true,
      });
      await fetchVelos(current_page.value);
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
      alert("Échec de la suppression du velo.");
    }
  }

  async function getById(id) {
    const entry = list.value.find((v) => v.veloId == id)
    if (entry != undefined) return entry

    return (await axios.get(`${window.VITE_BACKEND_URL}/Velos/GetById/${id}`)).data
  }

  async function getPhotosById(id) {
    let entries = photos.value.filter((v) => v.veloId == id)

    if (entries.length > 0) {
      return entries
    }

    entries = (await axios.get(`${window.VITE_BACKEND_URL}/Velos/GetPhotosById/${id}`)).data

    if (list.value.length >= CACHE_SIZE) {
      photos.value = entries
    } else {
      photos.value = photos.value.concat(entries)
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
      newEntries = (await axios.post(`${window.VITE_BACKEND_URL}/Velos/GetPhotosByIds`, ids)).data
    }
    const entries = { ...photoEntries, ...newEntries }

    if (Object.keys(photos.value).length >= CACHE_SIZE) {
      photos.value = entries
    } else {
      photos.value = { ...photos.value, ...newEntries }
    }

    return entries
  }

  async function getMentionById(id) {
    let entries = mention.value.filter((v) => v.veloId == id)

    if (entries.length > 0) {
      return entries
    }

    entries = (await axios.get(`${window.VITE_BACKEND_URL}/Velos/GetMentionById/${id}`)).data

    if (list.value.length >= 100) {
      mention.value = entries
    } else {
      mention.value = mention.value.concat(entries)
    }

    return entries
  }

  async function getCaracteristiqueById(id) {
    let entries = caracteristique.value.filter((v) => v.veloId == id)

    if (entries.length > 0) {
      return entries
    }

    entries = (await axios.get(`${window.VITE_BACKEND_URL}/Velos/GetCaracteristiqueById/${id}`))
      .data

    if (list.value.length >= 100) {
      caracteristique.value = entries
    } else {
      caracteristique.value = caracteristique.value.concat(entries)
    }

    return entries
  }

  async function count() {
    count = parseInt((await axios.get(`${window.VITE_BACKEND_URL}/Velos/count`)).data)
    total_pages.value = Math.floor(count / 20)

    return count
  }

  async function getByFiltres(
    taille,
    categorie,
    cara,
    marque,
    annee,
    kilomMin,
    kilomMax,
    posmot,
    motmarId,
    couplemot,
    capbat,
    poids,
    prixMin,
    prixMax,
    page = 0,
  ) {
    list.value = (
      await axios.get(`${window.VITE_BACKEND_URL}/Velos/getByFilters`, {
        params: {
          taille,
          categorie,
          cara,
          marque,
          annee,
          kilomMin,
          kilomMax,
          posmot,
          motmarId,
          couplemot,
          capbat,
          poids,
          prixMin,
          prixMax,
          page,
        },
      })
    ).data
    current_page.value = page
  }

  async function fetchBikes(page) {
    list.value = (await axios.get(`${window.VITE_BACKEND_URL}/Velos?page=${page}`)).data
    current_page.value = page
  }

  async function fetchAll() {
    const userStore = useUserStore()
    const response = await axios.get(`${window.VITE_BACKEND_URL}/Velos`, {
      headers: {
        Authorization: `Bearer ${userStore.token}`,
      },
      withCredentials: true,
    });
    list.value = response.data;
  }

  return {
    list,
    cart,
    add,
    post,
    deleteVelo,
    getPhotosById,
    getPhotosByIds,
    getById,
    getByFiltres,
    fetchBikes,
    fetchAll,
    count,
    current_page,
    total_pages,
    getMentionById,
    getCaracteristiqueById,
  }
})

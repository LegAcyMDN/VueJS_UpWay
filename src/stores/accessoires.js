import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const CACHE_SIZE = 200

export const useAccessoiresStore = defineStore('accesoires', () => {
  const list = ref([])
  const photos = ref({})
  const cart = ref([])
  const current_page = ref(0)
  const total_pages = ref(0)

  fetchAccessories(0)
  count()

  async function add(accessoire) {
    return (await axios.post(`${window.VITE_BACKEND_URL}/Accessoires`, accessoire)).data
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

  async function getByPrix(min, max, page = 0) {
    list.value = (
      await axios.get(`${window.VITE_BACKEND_URL}/Accessoires/GetByPrix`, {
        params: { min, max, page },
      })
    ).data
    current_page.value = page
  }

  async function getByCategory(category, page = 0) {
    list.value = (
      await axios.get(
        `${window.VITE_BACKEND_URL}/Accessoires/GetByCategory/${category}?page=${page}`,
      )
    ).data
    current_page.value = page
  }

  async function getByCategoryPrix(category, min, max, page = 0) {
    list.value = (
      await axios.get(`${window.VITE_BACKEND_URL}/Accessoires/GetByCategoryPrix`, {
        params: { category, min, max, page },
      })
    ).data
    current_page.value = page
  }

  async function fetchAccessories(page) {
    list.value = (await axios.get(`${window.VITE_BACKEND_URL}/Accessoires?page=${page}`)).data
    current_page.value = page
  }

  async function count() {
    count = parseInt((await axios.get(`${window.VITE_BACKEND_URL}/Accessoires/count`)).data)
    total_pages.value = Math.floor(count / 20)

    return count
  }

  return {
    list,
    cart,
    add,
    getPhotosById,
    getPhotosByIds,
    getById,
    getByPrix,
    getByCategory,
    getByCategoryPrix,
    fetchAccessories,
    count,
    current_page,
    total_pages,
  }
})

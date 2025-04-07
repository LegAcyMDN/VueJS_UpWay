import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

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

    entries = (await axios.get(`${window.VITE_BACKEND_URL}/Velos/GetCaracteristiqueById/${id}`)).data

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

  async function fetchBikes(page) {
    list.value = (await axios.get(`${window.VITE_BACKEND_URL}/Velos?page=${page}`)).data
    current_page.value = page
  }

  return {
    list,
    cart,
    add,
    getPhotosById,
    getPhotosByIds,
    getById,
    fetchBikes,
    count,
    current_page,
    total_pages,
    getMentionById,
    getCaracteristiqueById,
  }
})

import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVelosStore = defineStore('velos', () => {
  const list = ref([])
  const photos = ref([])
  const cart = ref([])
  const mention = ref([])

  fetchBikes(0)

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

    if (list.value.length >= 100) {
      photos.value = entries
    } else {
      photos.value = photos.value.concat(entries)
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

  async function count() {
    return (await axios.get(`${window.VITE_BACKEND_URL}/Velos/count`)).data
  }

  async function fetchBikes(page) {
    list.value = (await axios.get(`${window.VITE_BACKEND_URL}/Velos?page=${page}`)).data
  }

  return { list, cart, add, getPhotosById, getById, fetchBikes, count, getMentionById }
})

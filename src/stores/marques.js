import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMarquesStore = defineStore('marques', () => {
  const list = ref([])

  axios.get(`${window.VITE_BACKEND_URL}/Marques`).then((response) => {
    list.value = response.data
  })

  async function getById(id) {
    return (await axios.get(`${window.VITE_BACKEND_URL}/Marques/GetById/${id}`)).data
  }

  return { list, getById }
})

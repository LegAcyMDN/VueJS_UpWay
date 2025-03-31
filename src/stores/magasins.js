import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMagasinsStore = defineStore('stores', () => {
  const list = ref([])

  axios.get(`${window.VITE_BACKEND_URL}/Magasins`).then((response) => {
    list.value = response.data
  })

  async function getById(id) {
    return (await axios.get(`${window.VITE_BACKEND_URL}/Magasins/GetById/${id}`)).data
  }

  return { list, getById }
})

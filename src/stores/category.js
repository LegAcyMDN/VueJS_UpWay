import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoriesStore = defineStore('categories', () => {
  const list = ref([])

  axios.get(`${window.VITE_BACKEND_URL}/Categories`).then((response) => {
    list.value = response.data
  })

  async function getById(id) {
    return (await axios.get(`${window.VITE_BACKEND_URL}/Categories/GetById/${id}`)).data
  }

  return { list, getById }
})

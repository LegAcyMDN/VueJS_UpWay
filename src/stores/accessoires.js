import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAccessoiresStore = defineStore('accesoires', () => {
  const list = ref([])
  const cart = ref([])

  axios.get(`${window.VITE_BACKEND_URL}/Accessoires`).then((response) => {
    list.value = response.data
  })

  async function fetchAccessoires(page) {
    this.currentPage = page;
    response = await axios.get(
      `${window.VITE_BACKEND_URL}/Accessoires?=${page}`
    );
    list.value = response.data; 
  }

  async function add(accessoire) {
    return (await axios.post(`${window.VITE_BACKEND_URL}/Accessoires`, accessoire)).data
  }

  async function getById(id) {
    return (await axios.get(`${window.VITE_BACKEND_URL}/Accessoires/GetById/${id}`)).data
  }

  async function getPhotoById(id) {
    return (await axios.get(`${window.VITE_BACKEND_URL}/Accessoires/GetPhotosById/${id}`)).data
  }

  return { list, cart, add, getPhotoById, getById }
})

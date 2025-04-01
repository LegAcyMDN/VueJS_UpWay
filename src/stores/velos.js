import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVelosStore = defineStore('velos', () => {
  const list = ref([])
  const cart = ref([])

    axios.get(`${window.VITE_BACKEND_URL}/Velos`).then(response => {
        list.value = response.data
    })

    function add(velo) {
        return axios.post(`${window.VITE_BACKEND_URL}/Velos`, velo.value)
    }

    async function getById(id) {
      return (await axios.get(`${window.VITE_BACKEND_URL}/Velos/GetById/${id}`)).data
    }

    async function getPhotoById(id) {
        return (await axios.get(`${window.VITE_BACKEND_URL}/Velos/GetPhotosById/${id}`));
    }

    function fetchBikes(page) {
        axios.get(`${window.VITE_BACKEND_URL}/Velos?page=${page}`)
            .then(response => {
                list.value = response.data
            })
    }

    return { list, cart, add, getPhotoById, getById, fetchBikes }
})

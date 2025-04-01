import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVelosStore = defineStore('velos', () => {
  const list = ref([])
  const cart = ref([])
  const photos = ref([])

    const connected = ref(false)

    axios.get(`${window.VITE_BACKEND_URL}/Velos`)
        .then(response => {
            list.value = response.data
        })
    function fetchBikes(page) {
        //location.reload();
        axios.get(`${window.VITE_BACKEND_URL}/Velos?page=${page}`)
            .then(response => {
                list.value = response.data
            })
    }
    function add(velo) {
        return axios.post(`${window.VITE_BACKEND_URL}/Velos`, velo.value)
    }

    async function getPhotoById(id) {
        return (await axios.get(`${window.VITE_BACKEND_URL}/Velos/GetPhotosById/${id}`));
    }

    return { list, cart, add, getPhotoById, connected, fetchBikes }
})

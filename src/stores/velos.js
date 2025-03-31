import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVelosStore = defineStore('velos', () => {

    const list = ref([])
    const cart = ref([])

    const connected = ref(false)

    axios.get(`${window.VITE_BACKEND_URL}/Velos?page=0`)
        .then(response => {
            list.value = response.data
        })
    
    function add(velo) {
        return axios.post(`${window.VITE_BACKEND_URL}/Velos`, velo.value)
    }

    async function getPhotoById(id) {
        return (await axios.get(`${window.VITE_BACKEND_URL}/Velos/GetPhotosById/${id}`));
    }

    return { list, cart, add, getPhotoById, connected }
})
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAccessoiresStore = defineStore('accesoires', () => {

    const list = ref([])
    const cart = ref([])

    const connected = ref(false)

    axios.get(import.meta.env.VITE_BACKEND_URL+"/Accessoires")
        .then(response => {
            list.value = response.data
        })
    
    function add(accessoire) {
        return axios.post(import.meta.env.VITE_BACKEND_URL+"/add", accessoire.value)
    }

    return { list, cart, add, connected }
})

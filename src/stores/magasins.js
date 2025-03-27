import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMagasinsStore = defineStore("magasins", () => {
    const list = ref([])
    const connected = ref(false)

    axios.get(import.meta.env.VITE_BACKEND_URL+"/Magasins")
        .then(response => {
            list.value = response.data
        })
        
    return { list, connected }
})
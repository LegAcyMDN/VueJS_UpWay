import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAccessoiresStore = defineStore('accesoires', () => {

    const list = ref([])
    const cart = ref([])

    const connected = ref(false)

    const urlBase = "https://s401-dev.redboxing.moe/api/"

    axios.get(urlBase+"Accessoires")
        .then(response => {
            list.value = response.data
        })
    
    function add(accessoire) {
        return axios.post(urlBase+"add", accessoire.value)
    }

    return { list, cart, add, connected }
})

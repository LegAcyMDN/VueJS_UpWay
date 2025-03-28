import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVelosStore = defineStore('velos', () => {

    const list = ref([])
    const cart = ref([])

    const connected = ref(false)

    const urlBase = "https://s401-dev.redboxing.moe/api/"

    axios.get(urlBase+"Velos")
        .then(response => {
            list.value = response.data
        })
    
    function add(velo) {
        return axios.post(urlBase+"add", velo.value)
    }

    return { list, cart, add, connected }
})
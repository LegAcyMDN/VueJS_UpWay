import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAccessoiresStore = defineStore('accesoires', () => {
  const list = ref([])
  const cart = ref([])

  const connected = ref(false)

  axios.get(`${window.VITE_BACKEND_URL}/Accessoires`).then((response) => {
    list.value = response.data
  })

  function add(accessoire) {
    return axios.post(`${window.VITE_BACKEND_URL}/Accessoires`, accessoire.value)
  }

  return { list, cart, add, connected }
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVelosStore = defineStore('velos', () => {
  const list = ref([])
  const cart = ref([])

  axios.get(`${window.VITE_BACKEND_URL}/Velos`).then((response) => {
    list.value = response.data
  })

  async function add(velo) {
    return (await axios.post(`${window.VITE_BACKEND_URL}/Velos`, velo)).data
  }

  const countVelos = computed(() => list.value.length)

  return { list, cart, add, countVelos }
})

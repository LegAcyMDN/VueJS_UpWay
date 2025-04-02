import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMarquesStore = defineStore('marques', () => {
  const list = ref([])

  axios.get(`${window.VITE_BACKEND_URL}/Marques`).then((response) => {
    list.value = response.data
  })

  async function getById(id) {
    let entry = list.value.find((v) => v.marqueId == id)

    if (entry != undefined) {
      return entry
    }

    entry = (await axios.get(`${window.VITE_BACKEND_URL}/Marques/GetById/${id}`)).data
    console.log(entry)

    if (list.value.length >= 100) {
      list.value = [entry]
    } else {
      list.value.push(entry)
    }

    return entry
  }

  return { list, getById }
})

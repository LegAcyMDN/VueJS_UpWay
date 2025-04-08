import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoriesStore = defineStore('categories', () => {
  const list = ref([])
  const token = ref($cookies.get('jwt_token'))

  axios.get(`${window.VITE_BACKEND_URL}/Categories`).then((response) => {
    list.value = response.data
  })

  async function getById(id) {
    let entry = list.value.find((v) => v.categorieId == id)

    if (entry != undefined) {
      return entry
    }

    entry = (await axios.get(`${window.VITE_BACKEND_URL}/Categories/GetById/${id}`)).data
    console.log(entry)

    if (list.value.length >= 100) {
      list.value = [entry]
    } else {
      list.value.push(entry)
    }

    return entry
  }

  async function post(nom){
    const id = list.length +1
    const category = { categorieId : id ,libelleCategorie : nom };
    await axios.post(`${window.VITE_BACKEND_URL}/Categories`, category, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      withCredentials: true,
    });
  }

  return { list, getById, post }
})

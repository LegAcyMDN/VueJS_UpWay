import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useEstRealisesStore = defineStore('EstRealise', () => {
    const list = ref([])
  
    axios.get(`${window.VITE_BACKEND_URL}/EstRealises`).then((response) => {
      list.value = response.data
    })
  
    async function getByVeloId(id, type = "Mécanique") {
      const response = await axios.get(`${window.VITE_BACKEND_URL}/EstRealises/GetByVeloId/${id}/${type}`)
      const entries = response.data
    
      if (!Array.isArray(entries)) {
        console.warn("La réponse attendue est un tableau :", entries)
        return []
      }
    
      list.value = list.value.filter((e) => !(e.veloId === id && e.estRealiseRapportInspection?.typeInspection === type))
    
      list.value.push(...entries)
    
      return entries
    }
    

    async function getByIds(id) {
        let entry = list.value.find((v) => v.veloId == id)
    
        if (entry != undefined) {
          return entry
        }
    
        entry = (await axios.get(`${window.VITE_BACKEND_URL}/EstRealises/GetByIds/${id}/1/1`)).data
        console.log(entry)
    
        if (list.value.length >= 100) {
          list.value = [entry]
        } else {
          list.value.push(entry)
        }
    
        return entry
      }
    return { list, getByVeloId, getByIds}
  })
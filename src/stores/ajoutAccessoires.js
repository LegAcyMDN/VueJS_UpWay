import { ref } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

export const useAjoutAccessoiresStore = defineStore('ajoutaccessoires', () => {
    const list = ref([])
    
    async function ajouterAccessoire(accessoireId, panierId, quantiteAccessoire) {
        try {
            const data = {
                accessoireId, panierId, quantiteAccessoire
            }

            const res = await axios.post(`${window.VITE_BACKEND_URL}/AjouterAccessoires`, data)
            return res.data
        } catch (error) {
            console.error("Erreur lors de l'ajout d'accessoires :", error)
            throw error
        }
    }

    async function supprimerAccessoire(id) {
        try {
            axios.delete(`${window.VITE_BACKEND_URL}/AjouterAccessoires/${id}`)
        } catch (error) {
            console.error("Erreur lors de la suppression de l'accessoire :", error)
        }
    }

    return { list, ajouterAccessoire, supprimerAccessoire }
})
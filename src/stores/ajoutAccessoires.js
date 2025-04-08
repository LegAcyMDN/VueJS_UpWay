import { ref } from "vue"
import { defineStore } from "pinia"
import { useUserStore } from './user'
import axios from "axios"

export const useAjoutAccessoiresStore = defineStore('ajoutaccessoires', () => {
    const list = ref([])
    const userStore = useUserStore()
    
    async function ajouterAccessoire(accessoireId, panierId, quantiteAccessoire = 1) {
        try {
            const response = await axios.get(`${window.VITE_BACKEND_URL}/Panier/GetMine`, {
                headers: {
                    Authorization: `Bearer ${userStore.token}`,
                },
                withCredentials: true
            })

            console.log('panier récupéré !')

            const accessoireExistant = response.data.listeAjouterAccessoires.find(a => a.accessoireId === accessoireId)
            if (accessoireExistant) {
                await axios.put(`${window.VITE_BACKEND_URL}/AjouterAccessoires`, {
                    accessoireId: accessoireId,
                    panierId: panierId,
                    quantiteAccessoire: accessoireExistant.quantiteAccessoire + quantiteAccessoire
                }, {
                    headers: {
                        Authorization: `Bearer ${userStore.token}`,
                    },
                    withCredentials: true
                })
                console.log('modification qauntité effectué !')
            } else {
                await axios.post(`${window.VITE_BACKEND_URL}/AjouterAccessoires`, {
                    accessoireId: accessoireId,
                    panierId: panierId,
                    quantiteAccessoire: quantiteAccessoire 
                }, {
                    headers: {
                        Authorization: `Bearer ${userStore.token}`,
                    },
                    withCredentials: true 
                })
                console.log('ajout effectué !')
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout d'accessoire :", error)
            throw error
        }
    }

    async function supprimerAccessoire(id) {
        
    }

    return { list, ajouterAccessoire, supprimerAccessoire }
})
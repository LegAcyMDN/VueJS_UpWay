import { ref, watch, inject, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user'
import axios from 'axios'

export const usePanierStore = defineStore('paniers', () => {
    const $cookies = inject('$cookies')
    const panier = ref({})
    const userStore = useUserStore()
    
    const loadPanier = async () => {
        if (userStore.connected) {
            try {
                console.log("j'ai mon panié")
                const { data } = await axios.get(`${window.VITE_BACKEND_URL}/Panier/GetMine`, {
                    headers: {
                        Authorization: `Bearer ${userStore.token}`
                    },
                    withCredentials: true
                })
                
                console.log("Betrix est ici")
                panier.value = data
                $cookies.remove('panier')
            } catch (error) {
                console.log(error)
                if (error.status == 404) {
                    console.log("je suis passé par là")
                    const newPanier = {
                        clientId: userStore.current.clientId,
                        commandeId: null,
                        prixPanier: 0
                    }

                    const { data } = await axios.post(`${window.VITE_BACKEND_URL}/Panier`, newPanier, {
                        headers: {
                            Authorization: `Bearer ${userStore.token}`
                        },
                        withCredentials: true
                    })

                    panier.value = data
                } else {
                    console.error('Erreur lors du chargement du panier', error)
                }

            }
        } else {
            const panierCookie = $cookies.get('panier')
            panier.value = panierCookie ? JSON.parse(panierCookie) : []
        }
    }

    setTimeout(loadPanier, 1000);
    
    /*const savePanier = (panier) => {
        if (userStore.connected) {
            axios.post(`${window.VITE_BACKEND_URL}/Panier`, panier, {
                headers: {
                  Authorization: `Bearer ${userStore.token}`,
                },
                withCredentials: true
              });
        } else {
            $cookies.set('panier', JSON.stringify(list.value), {expires: 7})
        }
    }*/
    
    const panierIdActif = computed(() => {
        if (!userStore.connected) return null
        return panier.value != undefined ? panier.value.panierId : null
    }) 

    //watch(list, savePanier, { deep: true })

    return { panier, loadPanier, panierIdActif }
})
import { ref, watch, inject, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user'
import axios from 'axios'

export const usePanierStore = defineStore('paniers', () => {
    const $cookies = inject('$cookies')
    const list = ref([])
    const userStore = useUserStore()
    
    const loadPanier = async () => {
        if (userStore.connected) {
            const { data } = await axios.get(`${window.VITE_BACKEND_URL}/Panier`)
            list.value = data
            $cookies.remove('panier')
        } else {
            const panierCookie = $cookies.get('panier')
            list.value = panierCookie ? JSON.parse(panierCookie) : []
        }
    }
    
    const savePanier = (panier) => {
        if (userStore.connected) {
            axios.post(`${window.VITE_BACKEND_URL}/Panier`, panier, {
                headers: {
                  Authorization: `Bearer ${userStore.token.value}`,
                },
                withCredentials: true
              });
        } else {
            $cookies.set('panier', JSON.stringify(list.value), {expires: 7})
        }
    }
    
    const panierIdActif = computed(() => {
        if (!userStore.connected) return null
        return list.value.length > 0 ? list.value[0].panierId : null
    }) 

    watch(list, savePanier, { deep: true })

    return { list, loadPanier, panierIdActif, addToPanier }
})
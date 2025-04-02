import { ref, watch, inject } from 'vue'
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

    const savePanier = () => {
        if (userStore.connected) {
            axios.post(`${window.VITE_BACKEND_URL}/Panier`)
        } else {
            $cookies.set('panier', JSON.stringify(list.value), {expires: 7})
        }
    }

    watch(list, savePanier, { deep: true })

    return { list, loadPanier }
})
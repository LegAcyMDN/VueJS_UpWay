<script setup>
import { onMounted } from 'vue'
import Panier from '@/components/Panier.vue'
import { usePanierStore} from '@/stores/paniers'

const paniers = usePanierStore()

onMounted(() => {
    paniers.loadPanier()
})
</script>

<template>
    <main>
        <h2>Mon Panier</h2>
        <div v-if="paniers.list.length === 0">
            <span>Votre panier est vide !</span>
        </div>
        <div v-else>
            <Panier v-for="(panier, index) in paniers.list" :key="index" :panier="panier"/>
        </div>
    </main>
</template>
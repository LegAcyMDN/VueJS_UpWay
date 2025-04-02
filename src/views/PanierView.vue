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
        <div id="void-panier" v-if="paniers.list.length === 0">
            <h2>Panier vide</h2>
            <div id="h-panier">
                <span>Votre panier est vide !</span>
            </div>
            <div id="but-panier">
                <a>CONTINUER VOTRE SHOPPING</a>
            </div>
        </div>
        <div id="fill-panier" v-else>
            <h2>Mon panier</h2>
            <Panier v-for="(panier, index) in paniers.list" :key="index" :panier="panier"/>
        </div>
    </main>
</template>

<style scoped>
#void-panier {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    height: 50vh;
    text-align: center;
}
</style>
<script setup>
import { useAccessoiresStore } from '@/stores/accessoires'

const accessoire = useAccessoiresStore()

defineProps({
    panier: {
        required: true,
    },
})
</script>

<template>
    <img :src="panier.listeAjouterAccessoires[0].ajoutDAccessoire.listePhotoAccessoires[0].urlPhotoAccessoire" alt="Image Accessoire">
    {{ panier.listeAjouterAccessoires[0].ajoutDAccessoire.nomAccessoire }}
    {{ panier.listeAjouterAccessoires[0].ajoutDAccessoire.prixAccessoire }}
    {{ panier.listeAjouterAccessoires[0].quantiteAccessoire }}
</template>

<style scoped>
img{
    width: 15%;
}
</style>
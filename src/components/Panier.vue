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
    {{ panier.nom }}
    {{ panier.prix }}
    {{  panier.quantite }}
</template>

<style scoped>

</style>
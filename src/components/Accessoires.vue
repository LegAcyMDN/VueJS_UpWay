<script setup>
defineProps({
  data: {
    required: true,
  },
})

import { useAccessoiresStore } from '@/stores/accessoires';
import { ref } from 'vue';
import { toRefs } from '@vue/reactivity'
import axios from 'axios';

const { data } = toRefs(props);
const marque = ref({});
const categorie = ref({});
const accessoires = useAccessoiresStore()

axios.get("http://localhost:8082/Marques/" + data.value.marque).then(res => {
  marque.value = res.data
})
axios.get("http://localhost:8082/Categories/" + data.value.categorie).then(res => {
  categorie.value = res.data
})

</script>

<template>
    <h3>{{ data.nameAddessoire }}</h3>
    <p>{{ marque.nameMarque }}</p>
    <p>{{ categorie.nameCategorie }}</p>
    <p>{{ data.prixAccessoire }}€</p>
    <p>{{ data.descriptionAccessoire }}</p>
    <img :src="data.image"/>

    <button @click="accessoires.cart.push(data)"> Ajouter au panier</button>
</template>

<style scoped>
img{
  width: 500px;
}
</style>
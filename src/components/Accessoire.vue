<script setup>
import { ref } from 'vue';
import { toRefs } from '@vue/reactivity'
import axios from 'axios';

const props = defineProps({
  accessoire: {
    required: true,
  },
})
 
const { accessoire } = toRefs(props);
const marque = ref({});
const categorie = ref({});

// Récupération des données de l' API

// console.log(accessoire.value);

axios.get("https://s401-dev.redboxing.moe/api/Marques/GetById/" + accessoire.value.marqueId).then(res => {
  marque.value = res.data
})

axios.get("https://s401-dev.redboxing.moe/api/CategorieArticles/GetById/" + accessoire.value.categorieId).then(res => {
  categorie.value = res.data
})
</script>

<template> 
  <div>
    <!-- Vérification si port 5173 si probléme cors -->
    <h3>{{ accessoire.nomAccessoire }}</h3>
    <p>{{ marque.nomMarque }}</p>
    <p>{{ categorie.titreCategorieArticle }}</p>
    <p>{{ accessoire.prixAccessoire }}€</p>
    <p>{{ accessoire.descriptionAccessoire }}</p>
    <img :src="accessoire.image" alt="Image de l'accessoire" />
    <button @click="accessoires.cart.push(accessoire)">Ajouter au panier</button>
  </div>
</template>

<style scoped>
img{
  width: 500px;
}
div{
  margin: 50px;
}
</style>
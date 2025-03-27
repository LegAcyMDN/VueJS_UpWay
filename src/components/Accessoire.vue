<script setup>
import { ref } from 'vue';
import { toRefs } from '@vue/reactivity'
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const id = route.params.id;
const accessoire = ref({});
const marque = ref({});
const categorie = ref({});

// Récupération de l'accessoire par ID
axios.get(import.meta.env.VITE_BACKEND_URL+"/Accessoires/GetById/" + id).then(res => {
  accessoire.value = res.data;
  // Récupération données supplémentaires (marque et catégorie)
  axios.get(import.meta.env.VITE_BACKEND_URL+"/Marques/GetById/" + accessoire.value.marqueId).then(res => {
    marque.value = res.data;
  })
  axios.get(import.meta.env.VITE_BACKEND_URL+"/Categories/GetById/" + accessoire.value.categorieId).then(res => {
    categorie.value = res.data;
  })
});
</script>

<template> 
  <div class="accessoire">
    <div>
      <img :src="accessoire.image" alt="Image de l'accessoire" />
      <div>
        <h3>{{ accessoire.nomAccessoire }}</h3>
        <p>{{ accessoire.prixAccessoire }}€</p>
        <button @click="accessoires.cart.push(accessoire)">Ajouter au panier</button>
      </div>
    </div>
    <div>
      <p>{{ marque.nomMarque }}</p>
      <p>{{ categorie.libelleCategorie }}</p>
      <p>{{ accessoire.descriptionAccessoire }}</p>
    </div>
  </div>
</template>

<style scoped>
img{
  width: 500px;
  background-color: lightgrey;
}
.accessoire{
  background-color: white;
  border-color: white;
  border: 0px;
  margin: 50px;
}
</style>
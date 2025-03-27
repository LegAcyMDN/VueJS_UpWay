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
axios.get(import.meta.env.VITE_BACKEND_URL+"/Marques/GetById/" + accessoire.value.marqueId).then(res => {
  marque.value = res.data
})
axios.get(import.meta.env.VITE_BACKEND_URL+"/Categories/GetById/" + accessoire.value.categorieId).then(res => {
  categorie.value = res.data
})
</script>

<template> 
  <div>
    <router-link :to="{ path: '/accessoire/'+ accessoire.accessoireId, params: { id: accessoire.accessoireId } }">
      <button class="accessoire">
        <!-- Vérification si port 5173 si probléme cors -->
        <img :src="accessoire.image" alt="Image de l'accessoire" />
        <h3>{{ accessoire.nomAccessoire }}</h3>
        <p>{{ accessoire.prixAccessoire }}€</p>
      </button>
    </router-link>
    <button @click="accessoires.cart.push(accessoire)">Ajouter au panier</button>
  </div>
</template>

<style scoped>
img{
  width: 500px;
  background-color: lightgrey;
}
div{
  margin: 50px;
}
.accessoire{
  background-color: white;
  border-color: white;
  border: 0px;
}
</style>
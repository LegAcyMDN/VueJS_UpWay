<script setup>
import { ref } from 'vue'
import { toRefs } from '@vue/reactivity'
import { useMarquesStore } from '../stores/marques.js'
import { useCategoriesStore } from '../stores/category.js'
import axios from 'axios'

const props = defineProps({
  accessoire: {
    required: true,
  },
})

const { accessoire } = toRefs(props)
const brandStore = useMarquesStore()
const categoriesStore = useCategoriesStore()

const marque = ref({})
const categorie = ref({})

// Récupération des données de l' API
brandStore.getById(accessoire.value.marqueId).then((brand) => {
  marque.value = brand
})

categoriesStore.getById(accessoire.value.categorieId).then((category) => {
  categorie.value = category
})
</script>

<template>
  <div>
    <router-link
      :to="{
        path: '/accessoire/' + accessoire.accessoireId,
        params: { id: accessoire.accessoireId },
      }"
    >
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
img {
  width: 500px;
  background-color: lightgrey;
}
div {
  margin: 50px;
}
.accessoire {
  background-color: white;
  border-color: white;
  border: 0px;
}
</style>

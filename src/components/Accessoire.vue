<script setup>
import { ref } from 'vue'
import { toRefs } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { useMarquesStore } from '../stores/marques.js'
import { useCategoriesStore } from '../stores/category.js'
import axios from 'axios'

const brandStore = useMarquesStore()
const categoriesStore = useCategoriesStore()
const route = useRoute()

const id = route.params.id
const accessoire = ref({})
const marque = ref({})
const categorie = ref({})
var photos = ref({})

// Récupération des données de l' API
brandStore.getById(accessoire.value.marqueId).then((brand) => {
  marque.value = brand
})

categoriesStore.getById(accessoire.value.categorieId).then((category) => {
  categorie.value = category
})
</script>

<template>
  <div class="accessoire">
    <div>
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
img {
  width: 500px;
  background-color: lightgrey;
}
.accessoire {
  background-color: white;
  border-color: white;
  border: 0px;
  margin: 50px;
}
</style>

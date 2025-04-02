<script setup>
import { ref } from 'vue'
import { toRefs } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { useMarquesStore } from '../stores/marques.js'
import { useCategoriesStore } from '../stores/category.js'
import axios from 'axios'
import { useAccessoiresStore } from '@/stores/accessoires.js'

const route = useRoute()
const brandStore = useMarquesStore()
const categoriesStore = useCategoriesStore()
const accessoiresStore = useAccessoiresStore()

const id = route.params.id
const accessoire = ref({})
const marque = ref({})
const categorie = ref({})
const photos = ref({})

// Récupération de l'accessoire par ID
axios.get(import.meta.env.VITE_BACKEND_URL + '/Accessoires/GetById/' + id).then((res) => {
  accessoire.value = res.data
  // Récupération données supplémentaires (marque et catégorie)
  brandStore.getById(accessoire.value.marqueId).then((brand) => {
    marque.value = brand
  })
  brandStore.getById(accessoire.value.categorieId).then((brand) => {
    categorie.value = brand
  })
  accessoiresStore.getPhotoById(accessoire.value.accessoireId).then((brand) => {
    photos.value = brand
  })
})
</script>

<template>
  <div class="accessoire">
    <div>
      <img
        v-if="photos[0]?.urlPhotoAccessoire"
        :src="photos[0].urlPhotoAccessoire"
        alt="Image de l'accessoire"
      />
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

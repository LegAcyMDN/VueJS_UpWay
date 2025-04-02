<script setup>
import { ref, watch } from 'vue'
import { toRefs } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { useMarquesStore } from '../stores/marques.js'
import { useCategoriesStore } from '../stores/category.js'
import axios from 'axios'
import { useVelosStore } from '@/stores/velos'

const route = useRoute()
const brandStore = useMarquesStore()
const categoriesStore = useCategoriesStore()
const velosStore = useVelosStore()

const id = route.params.id

const velo = ref({})
const marque = ref({})
const categorie = ref({})
const photos = ref({})
const mention = ref([])

// Récupération de le velo par ID
velosStore.getById(id).then((data) => {
  velo.value = data

  // Récupération données supplémentaires (marque et catégorie)
  brandStore.getById(velo.value.marqueId).then((brand) => {
    marque.value = brand
  })

  categoriesStore.getById(velo.value.categorieId).then((category) => {
    categorie.value = category
  })
  velosStore.getPhotosById(velo.value.veloId).then((data) => {
    photos.value = data
  })
  velosStore.getMentionById(velo.value.veloId).then((data) => {
    mention.value = data
  })
})
</script>

<template>
  <div class="velo">
    <div>
      
      <img v-if="photos[0]?.urlPhotoVelo" :src="photos[0].urlPhotoVelo" alt="Photo du vélo" />
      <div class="nom">
        <h3 class="titre_velo">{{ velo.nomVelo }}</h3>
        <p>{{ velo.anneeVelo }} {{ velo.tailleMin }}- {{ velo.tailleMax }}</p>
        <p class="prixvelo">{{ velo.prixNeuf }}€</p>
        <p class="prixvelo">{{ velo.prixRemise }}€</p>
        <!--<p class="ideal">{{mention[0].libelleMention}}</p>-->
        <p></p>
        <button class="panier" @click="velos.cart.push(velo)">Ajouter au panier</button>
      </div>
    </div>
    <div>
      <p>{{ marque.nomMarque }}</p>
      <p>{{ categorie.libelleCategorie }}</p>
      <p>{{ velo.descriptifVelo }}</p>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 70%;
  background-color: lightgrey;
}
.velo {
  background-color: white;
  border-color: white;
  border: 0px;
  margin: 50px;
}
.titre_velo {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.prixvelo {
  font-size: 25px;
  font-weight: bold;
}
.nom{
  position: absolute;
  top: 20%;
  left: 71%;
}

.panier {
    width: 170px;
    background-color: #d57a12;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 50px;
    cursor: pointer;
    transition: background 0.3s ease;
}
</style>

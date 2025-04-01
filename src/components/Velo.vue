<script setup>
import { ref, watch } from 'vue';
import { toRefs } from '@vue/reactivity';
import { useRoute } from 'vue-router'
import { useMarquesStore } from '../stores/marques.js'
import { useCategoriesStore } from '../stores/category.js'
import axios from 'axios'
import { useVelosStore } from '@/stores/velos';

const route = useRoute()
const brandStore = useMarquesStore()
const categoriesStore = useCategoriesStore()
const velosStore = useVelosStore()

const id = route.params.id
const velo = ref({})
const marque = ref({})
const categorie = ref({})
const photos = ref({})

// Récupération de le velo par ID
axios.get(import.meta.env.VITE_BACKEND_URL + '/Velos/GetById/' + id).then((res) => {
  velo.value = res.data
  // Récupération données supplémentaires (marque et catégorie)
  brandStore.getById(velo.value.marqueId).then((brand) => {
    marque.value = brand
  })
  brandStore.getById(velo.value.categorieId).then((brand) => {
    categorie.value = brand
  })
  velosStore.getPhotoById(velo.value.veloId).then((brand) => {
    photos.value = brand
  })
})
</script>


<template>
  <div class="velo">
    <div>
      <img
        v-if="photos[0]?.urlPhotoVelo"
        :src="photos[0].urlPhotoVelo"
        alt="Photo du vélo"
      />
      <div>
      <h3 class="titre_velo">{{ velo.nomVelo}}</h3>
      <p>{{ velo.anneeVelo }}  {{ velo.tailleMin  }}- {{  velo.tailleMax }}</p>
      <p class="prixvelo">{{ velo.prixNeuf }}€</p>
      <p class="prixvelo">{{ velo.prixRemise }}€</p>
        <button @click="velos.cart.push(velo)">Ajouter au panier</button>
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
  width: 500px;
  background-color: lightgrey;
}
.velo {
  background-color: white;
  border-color: white;
  border: 0px;
  margin: 50px;
}
.titre_velo{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.prixvelo{
  font-size: 25px;
  font-weight: bold;
}
</style>
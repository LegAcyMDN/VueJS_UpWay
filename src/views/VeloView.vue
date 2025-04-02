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
        <h3 class="name">{{ velo.nomVelo }}</h3>
        <!--<p class="prixvelo">{{ velo.prixNeuf }}€</p>-->
        <p class="prixvelo">{{ velo.prixRemise }}€</p>
        <p class="idealtitre">{{mention[0].libelleMention}}</p>
        <p class="idealcont">{{mention[0].valeurMention}}</p>
        <p class="etattitre">{{mention[1].libelleMention}}</p>
        <p class="etatcont">{{mention[1].valeurMention}}</p>
        <button class="panier" @click="velos.cart.push(velo)">Ajouter au panier</button>
      </div>
    </div>
    <div class="aime">
      <p class="aimetitre">{{mention[2].libelleMention}}</p>
      <p class="aimecont">{{mention[2].valeurMention}}</p>
    </div>
    <div>
      <p class="desc">{{ velo.descriptifVelo }}</p>
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
  padding-bottom: 200px;
}
.titre_velo {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.prixvelo {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5%;
  margin-top: 3%;
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
.name{
  font-size: 35px;
  font-weight: bold;
}

.idealtitre{
  font-weight: bold;
  margin-bottom: 2%;
}

.idealcont{
  margin-bottom: 5%;
  margin-right: 12%;
}

.etatcont{
  margin-top: 2%;
  margin-bottom: 5%;
  margin-right: 12%;
}

.aime{
  position: absolute;
  top: 105%;
  left: 10%;
}

.aimetitre{
  font-size: 30px;
  font-weight: bold;
}

.aimecont{
  margin-top: 30px;
  width: 40%;
}

.desc{
  position: absolute;
  top: 110%;
  left: 55%;
  width: 29%
}
</style>

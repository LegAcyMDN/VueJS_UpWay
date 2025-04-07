<script setup>
import { ref } from 'vue'
import { toRefs } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { useMarquesStore } from '../stores/marques.js'
import { useCategoriesStore } from '../stores/category.js'
import axios from 'axios'
import { useAccessoiresStore } from '@/stores/accessoires.js'
import { useAjoutAccessoiresStore } from '@/stores/ajoutAccessoires.js'
import { usePanierStore } from '@/stores/paniers.js'

const route = useRoute()
const brandStore = useMarquesStore()
const categoriesStore = useCategoriesStore()
const accessoiresStore = useAccessoiresStore()
const ajoutAccessoireStore = useAjoutAccessoiresStore()
const panierStore = usePanierStore()

const id = route.params.id
const accessoire = ref({})
const marque = ref({})
const categorie = ref({})
const photos = ref({})

// Récupération de l'accessoire par ID
accessoiresStore.getById(id).then((data) => {
  accessoire.value = data

  // Récupération données supplémentaires (marque et catégorie)
  brandStore.getById(accessoire.value.marqueId).then((brand) => {
    marque.value = brand
  })

  categoriesStore.getById(accessoire.value.categorieId).then((category) => {
    categorie.value = category
  })
  accessoiresStore.getPhotosById(accessoire.value.accessoireId).then((data) => {
    photos.value = data
  })
})

// Ajouter un accessoire au panier
const ajouterAuPanier = async () => {
  try {
    await panierStore.loadPanier()
    const panierId = panierStore.panierIdActif

    if (!panierId) {
      console.error('Aucun panier actif trouvé.') 
      return
    }

    const accessoireId = accessoire.value.accessoireId
    const quantiteAccessoire = 1

    await ajoutAccessoireStore.ajouterAccessoire(accessoireId, panierId, quantiteAccessoire)
    alert('Accessoire ajouté au panier !')
  } catch (error) {
    console.error('Erreur lors de l\'ajout au panier :', error)
    alert('Aucun ajout n\'a été fait au panier !')
  }
}
</script>

<template>
  <div class="accessoire"> 
    <div>
      <img
        v-if="photos[0]?.urlPhotoAccessoire"
        :src="photos[0].urlPhotoAccessoire"
        alt="Image de l'accessoire"
      />
      <div class="nom">
        <h3 class="name">{{ accessoire.nomAccessoire }}</h3>
        <p class="prix">{{ accessoire.prixAccessoire }}€</p>
        <button class="panier" @click="ajouterAuPanier">Ajouter au panier</button>
      </div>
    </div>
    <div>
      <h2 class="Titre_Desc">Description du produit</h2>
      <p class="description">{{ accessoire.descriptionAccessoire }}</p>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 70%;
  background-color: lightgrey;
}
.accessoire {
  background-color: white;
  border-color: white;
  border: 0px;
  margin: 50px;
}
.nom{
  position: absolute;
  top: 20%;
  left: 71%;
}
.name{
  font-size: 35px;
  font-weight: bold;
}
.prix{
  margin-left: 0%;
  margin-top: 5%;
  font-size: 25px;
  font-weight: bold;
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
.Titre_Desc{
  margin-left:6%;
  margin-bottom: 3%;
  font-size: 25px;
}
.description{
  line-height: 2.5;
  font-size: 16px;
  margin-left:6%;
}
</style>

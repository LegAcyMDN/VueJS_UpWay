<script setup>
import { ref, watch } from 'vue'
import { toRefs } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { useMarquesStore } from '../stores/marques.js'
import { useCategoriesStore } from '../stores/category.js'
import axios from 'axios'
import { useVelosStore } from '@/stores/velos'
import { useCaracteristiqueVeloStore } from '@/stores/caracteristiqueVelo'

const route = useRoute()
const brandStore = useMarquesStore()
const categoriesStore = useCategoriesStore()
const velosStore = useVelosStore()
const caracteristiqueVeloStore = useCaracteristiqueVeloStore()

const id = route.params.id

const velo = ref({})
const marque = ref({})
const categorie = ref({})
const photos = ref({})
const mention = ref({})
const caracteristiqueVelo = ref({})

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
  caracteristiqueVeloStore.getById(velo.value.caracteristiqueVeloId).then((data) => {
    caracteristiqueVelo.value = data
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
    <div class="sous_image">
      <div class="aime">
        <p class="aimetitre">{{mention[2].libelleMention}}</p>
        <p class="aimecont">{{mention[2].valeurMention}}</p>
      </div>
      <div>
        <p class="desc">{{ velo.descriptifVelo }}</p>
      </div>
    </div>
    <h2 class="caratitre">Caractéristique</h2>
    <div class="Caracteristique">
      <div class="cara">
        <h3 class="carastitre">Générales</h3>
        <p>Marque : {{ marque.nomMarque }}</p>
        <p>Usage : {{ categorie.libelleCategorie }}</p>
        <p>Couleur : {{ caracteristiqueVelo.couleur }}</p>
        <p>Année : {{ velo.anneeVelo }}</p>
        <p>Kilométrage : {{  velo.nombreKms }} km</p>
        <p>Poids : {{ caracteristiqueVelo.poids }} kg</p>
        <p>Type de cadre : </p>
        <h4 class="caradetails">Taille</h4>
        <p>Taille du constructeur : {{ velo.tailleMin }} - {{ velo.tailleMax }}</p>
        <p>Tube selle : {{ caracteristiqueVelo.tubeSelle }}</p>
      </div>
      <div class="cara">
        <h3 class="carastitre">Électrique</h3>
        <h4 class="caradetails">Batterie</h4>
        <p>État origine : {{ caracteristiqueVelo.etatBatterie }}</p>
        <p>Capacité batteire : {{ velo.capaciteBatterie }}</p>
        <p>Position batterie : </p>
        <p>Batterie amovible :</p>
        <h4 class="caradetails">Moteur</h4>
        <p>Marque :</p>
        <p>Modèle :</p>
        <p>Position moteur : {{ velo.positionMoteur }}</p>
        <p>Couple moteur :</p>
        <p>Vitesse maximale :</p>
      </div>
      <div class="cara">
        <h3 class="carastitre">Mécanique</h3>
        <h4 class="caradetails">Transmission et freins </h4>
        <p>Passage de vitesse :</p>
        <p>Chaine de transmission :</p>
        <p>Modèle de transmission : {{ caracteristiqueVelo.modelTransmission }}</p>
        <p>Nombre de vitesses : {{ caracteristiqueVelo.nombreVitesse }}</p>
        <p>Freins : {{ caracteristiqueVelo.freins }}</p>
        <h4 class="caradetails">Roues et pneus</h4>
        <p>Taille de roues : {{ caracteristiqueVelo.taillesRoues }}</p>
        <p>Pneus : {{ caracteristiqueVelo.pneus }}</p>
        <p>Position porte-bagages :</p>
      </div>
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
  padding-bottom: 100px;
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

.sous_image{
  display: flex;
  gap: 50px;
  flex-direction: row;
  justify-content: center;
  margin-left:8%;
  margin-top: 3%;
}

.aimetitre{
  font-size: 30px;
  font-weight: bold;
}

.aimecont{
  margin-top: 30px;
  width: 85%;
}

.desc{
  width: 80%
}
.Caracteristique{
  display: flex;
  gap: 50px;
  flex-direction: row;
  margin-top: 5%;
  margin-left: 8%;
}
.caratitre{
  margin-top: 7%;
  margin-left: 8%;
  font-size: 30px;
}
.carastitre{
  font-size: 25px;
  margin-bottom: 5%;
}
.cara{
  width: 90%;
  line-height: 1.7;
}

.caradetails{
  font-size: 20px;
  margin: 10px 0px 10px 0px;
}
</style>

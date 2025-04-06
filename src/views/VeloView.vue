<script setup>
import { ref, watch } from 'vue'
import { toRefs } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { useMarquesStore } from '../stores/marques.js'
import { useCategoriesStore } from '../stores/category.js'
import axios from 'axios'
import { useVelosStore } from '@/stores/velos'
import { useCaracteristiqueVeloStore } from '@/stores/caracteristiqueVelo'
import { useMoteursStore } from '@/stores/moteur'
import { useEstRealisesStore } from '@/stores/estrealises.js'

const route = useRoute()
const brandStore = useMarquesStore()
const categoriesStore = useCategoriesStore()
const velosStore = useVelosStore()
const caracteristiqueVeloStore = useCaracteristiqueVeloStore()
const moteursStore = useMoteursStore()
const estrealisesStore = useEstRealisesStore()

const id = route.params.id

const velo = ref({})
const marque = ref({})
const categorie = ref({})
const photos = ref({})
const mention = ref({})
const caracteristiqueVelo = ref({})
const moteur = ref({})
const marquemoteur = ref({})
const caracteristique = ref({})
const estrealises = ref({})
let pbat = ref({})
let abat = ref({})
let pbag = ref({})
let pv   = ref({})
let ct   = ref({})    

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
  velosStore.getCaracteristiqueById(velo.value.veloId).then((data) => {
    caracteristique.value = data
    data.forEach(cara => {
      if (cara.caracteristiqueId == 34 || cara.caracteristiqueId == 35 || cara.caracteristiqueId == 36)
      {
        pbat = cara.libelleCaracteristique;
      }
      if (cara.caracteristiqueId == 38 || cara.caracteristiqueId == 39)
      {
        abat = cara.libelleCaracteristique;
      }
      if (cara.caracteristiqueId == 41 || cara.caracteristiqueId == 42 || cara.caracteristiqueId == 43 || cara.caracteristiqueId == 44)
      {
        pbag = cara.libelleCaracteristique;
      }
      if (cara.caracteristiqueId == 51 || cara.caracteristiqueId == 52 || cara.caracteristiqueId == 53)
      {
        pv = cara.libelleCaracteristique;
      }
      if (cara.caracteristiqueId == 47 || cara.caracteristiqueId == 48 || cara.caracteristiqueId == 49)
      {
        ct = cara.libelleCaracteristique;
      }
    });
  })
  caracteristiqueVeloStore.getById(velo.value.caracteristiqueVeloId).then((data) => {
    caracteristiqueVelo.value = data
  })
  moteursStore.getById(velo.value.moteurId).then((data) => {
    moteur.value = data
    brandStore.getById(moteur.value.marqueId).then((brand) => {
      marquemoteur.value = brand
    })
  })
  estrealisesStore.getByIds(velo.value.veloId).then((data) => {
    estrealises.value = data
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
    <div class="Caracteristique">
      <h2 class="caratitre">Caractéristique</h2>
      <div id="Caracteristiquec" class="column">
        <div class="cara">
          <h3 class="carastitre">Générales</h3>
          <p>Marque : {{ marque.nomMarque }}</p>
          <p>Usage : {{ categorie.libelleCategorie }}</p>
          <p>Couleur : {{ caracteristiqueVelo.couleur }}</p>
          <p>Année : {{ velo.anneeVelo }}</p>
          <p>Kilométrage : {{  velo.nombreKms }} km</p>
          <p>Poids : {{ caracteristiqueVelo.poids }} kg</p>
          <p>Type de cadre : {{  caracteristique[0].libelleCaracteristique }} </p>
          <h4 class="caradetails">Taille</h4>
          <p>Taille du constructeur : {{ velo.tailleMin }} - {{ velo.tailleMax }}</p>
          <p>Tube selle : {{ caracteristiqueVelo.tubeSelle }}</p>
        </div>
        <div class="cara">
          <h3 class="carastitre">Électrique</h3>
          <h4 class="caradetails">Batterie</h4>
          <p>État origine : {{ caracteristiqueVelo.etatBatterie }}</p>
          <p>Capacité batteire : {{ velo.capaciteBatterie }}</p>
          <p>Position batterie : {{  pbat }}</p>
          <p>Batterie amovible : {{  abat }}</p>
          <h4 class="caradetails">Moteur</h4>
          <p>Marque : {{ marquemoteur.nomMarque }}</p>
          <p>Modèle : {{ moteur.modeleMoteur }}</p>
          <p>Position moteur : {{ velo.positionMoteur }}</p>
          <p>Couple moteur : {{ moteur.coupleMoteur }}</p>
          <p>Vitesse maximale : {{ moteur.vitesseMaximal }}</p>
        </div>
        <div class="cara">
          <h3 class="carastitre">Mécanique</h3>
          <h4 class="caradetails">Transmission et freins </h4>
          <p>Passage de vitesse : {{  ct }}</p>
          <p>Chaine de transmission : {{  pv }}</p>
          <p>Modèle de transmission : {{ caracteristiqueVelo.modelTransmission }}</p>
          <p>Nombre de vitesses : {{ caracteristiqueVelo.nombreVitesse }}</p>
          <p>Freins : {{ caracteristiqueVelo.freins }}</p>
          <h4 class="caradetails">Roues et pneus</h4>
          <p>Taille de roues : {{ caracteristiqueVelo.taillesRoues }}</p>
          <p>Pneus : {{ caracteristiqueVelo.pneus }}</p>
          <p>Position porte-bagages : {{  pbag }}</p>
        </div>
      </div>
    </div>
    <div class="histrapp">
      <h2>Historique et rapport d'inspection</h2>
      <div class="column">
        <div class="inspection">
          <h2 class="titreInspection">Inspection</h2>
          <p>Tous les vélos Upway ont été inspectés et reconditionnés par nos mécaniciens professionnels selon un cahier des charges précis. Notre savoir-faire vous permet de profiter d'un vélo en parfait état mécanique et électrique.</p>
          <modale :revele="revele" :toggleModale="toggleModale"></modale>
          <div v-on:click="toggleModale" class="btn btn-success" id="buttmodale">
            <h3>{{ velo.nomVelo }} ( {{ velo.anneeVelo }} )</h3>
            <div class="info">
              <p>Cadre, transmission, freinage, roues et pneus inspectés et testés  </p>
              <p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon/Check Circle"><path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#09D192"></path><path d="M7.5 10L9.16667 11.6667L12.5 8.33337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></p>
            </div>
            <div class="info">
              <p>Batterie, moteur et console diagnostiqués et en parfait état de fonctionnement</p>
              <p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon/Check Circle"><path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#09D192"></path><path d="M7.5 10L9.16667 11.6667L12.5 8.33337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></p>
            </div>
            <div class="info">
              <p>Logiciel mis à jour</p>
              <p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon/Check Circle"><path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#09D192"></path><path d="M7.5 10L9.16667 11.6667L12.5 8.33337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></p>
            </div>
            <div class="info">
              <p>Essai en conditions réelles, nettoyage complet et contrôle final en sortie d'atelier</p>
              <p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon/Check Circle"><path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#09D192"></path><path d="M7.5 10L9.16667 11.6667L12.5 8.33337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></p>
            </div>
          </div>
        </div>
        <div>
          <h2 class="titreInspection">Historique du vélo</h2>
          <p>{{ estrealises.historiqueInspection}}</p>
          <h2 class="titreInspection">Commentaires du mécanicien</h2>
          <p>{{ estrealises.commentaireInspection }}</p>
        </div>
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
#Caracteristiquec{
  margin-top: 5%;
  margin-left: 8%;
}

.Caracteristique{
  background-color: rgb(227, 245, 252);
}
.caratitre{
  margin-top: 7%;
  margin-left: 8%;
  font-size: 30px;
}
.carastitre{
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

h2{
  font-size: 25px;
}

.histrapp{
  margin-left: 8%;
  margin-top: 5%;
}

.column{
  display: flex;
  gap: 50px;
  flex-direction: row;
}

#buttmodale{
  box-shadow: 0px 0px 10px 7px rgb(58, 58, 58,0.5);
  background-color: rgb(216, 216, 216, 0.5);
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
  margin-left: 3px;
  cursor: pointer;
}
.inspection{
  width: 45%;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2;
}

.titreInspection{
  margin-top: 8%;
  margin-bottom: 3%;
}

</style>


<script>
import Modale from "@/components/ModaleInspection.vue";

export default {
  name: "Contenu",
  data() {
    return {
      revele: false
    };
  },
  components: {
    modale: Modale
  },
  methods: {
    toggleModale: function() {
      this.revele = !this.revele;
    }
  }
};
</script>
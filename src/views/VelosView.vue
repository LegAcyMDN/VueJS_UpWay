<script setup>
import ProductCard from '../components/ProductCard.vue'
import { useVelosStore } from '@/stores/velos'
import { ref, watch } from 'vue'

const velos = useVelosStore()
const images = ref({})

// ref pour contrôler l'affichage des filtres
const afficherTaille = ref(true)
const afficherCategorie = ref(false)
const afficherMarque = ref(false)
const afficherPrix = ref(false)
//
const afficherAnnee = ref(false)
const affichercaracteristique = ref(false)
const afficherKilometrage = ref(false)
//
const afficherPositionMoteur = ref(false)
const afficherMarqueMoteur = ref(false)
const afficherCoupleMoteur = ref(false)
//
const afficherCapaciteBatterie = ref(false)
const afficherPositionBatterie = ref(false)
const afficherBatterieAmovible = ref(false)
//
const afficherPositionPB = ref(false)
const afficherPoids = ref(false)

// Valeurs des filtres
const votreTaille = ref(170)
const categoryId = ref(null)
const marqueId = ref(null)
const prixMin = ref(0)
const prixMax = ref(799)
//
const annee = ref(2025)
const caracteristiqueVeloId = ref(null)
const kilometrageMin = ref(2)
const kilometrageMax = ref(23218)
//
const positionMoteur = ref(false)
const marqueMoteurId = ref(null)
const coupleMoteur = ref(70)
//
const capaciteBatterie = ref(500)
const positionBatterie = ref(false)
const batterieAmovible = ref(false)
//
const positionPorteBaguage = ref(false)
const poids= ref(23)


function getImage(id) {
  return images.value[id] == undefined ? undefined : images.value[id][0].urlPhotoVelo
}

watch(
  () => velos.list,
  async () => {
    images.value = await velos.getPhotosByIds(velos.list.map((a) => a.veloId))
  },
)
/*
// appelle `getByCategoryPrix` dès qu'un filtre est modifié
const updateAccessoires = async () => {
  await accessoires.getByCategoryPrix(votreTaille.value, categoryId.value, caracteristiqueVeloId.value, marqueId.value, annee.value, 
  kilometrageMin.value, kilometrageMax.value, positionMoteur.value, marqueMoteurId.value, coupleMoteur.value, capaciteBatterie.value, 
  positionBatterie.value, batterieAmovible.value, positionPorteBaguage.value, poids.value, prixMin.value, prixMax.value, accessoires.current_page)
}
watch([prixMin, prixMax, categoryId], updateAccessoires, { immediate: true })

// Pagination:
const changePage = async (page) => {
  await accessoires.getByCategoryPrix(votreTaille.value, categoryId.value, caracteristiqueVeloId.value, marqueId.value, annee.value, 
  kilometrageMin.value, kilometrageMax.value, positionMoteur.value, marqueMoteurId.value, coupleMoteur.value, capaciteBatterie.value, 
  positionBatterie.value, batterieAmovible.value, positionPorteBaguage.value, poids.value, prixMin.value, prixMax.value, page)
}
  */
</script>

<template>
  <h1 class="h1-velo">Vélos d'occasion : vélos reconditionnés aux meilleures prix</h1>
  <p>
    Découvrez tous nos modèles de vélos électriques, reconditionnés par une équipe de
    professionnels, accessibles à tous et garantis un an.
  </p>

  <!-- Main -->
  <div class="velos_fitre_container">
    <div class="velos_fitre">
      <h2>FILTRER</h2>
      <!-- Filtrage par Votre taille -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Votre taille</h2>
          <button @click="afficherTaille = !afficherTaille" class="toggle-button">
            {{ afficherTaille ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherTaille">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="votreTaille" />cm
          </div>
        </div>
      </div>
      <!-- Filtrage par categorie -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Categorie</h2>
          <button @click="afficherCategorie = !afficherCategorie" class="toggle-button">
            {{ afficherCategorie ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherCategorie">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="categoryId" />
          </div>
        </div>
      </div>
      <!-- Filtrage par caracteristique -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Caracteristique</h2>
          <button @click="affichercaracteristique = !affichercaracteristique" class="toggle-button">
            {{ affichercaracteristique ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="affichercaracteristique">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="caracteristiqueVeloId" />
          </div>
        </div>
      </div>
      <!-- Filtrage par Marque -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Marque</h2>
          <button @click="afficherMarque = !afficherMarque" class="toggle-button">
            {{ afficherMarque ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherMarque">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="marqueId" />
          </div>
        </div>
      </div>
      <!-- Filtrage par prix -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Prix</h2>
          <button @click="afficherPrix = !afficherPrix" class="toggle-button">
            {{ afficherPrix ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherPrix">
          <div class="input_box_fitre">
            <label>De</label>
            <input class="input_fitre" type="text" v-model="prixMin" id="prixMin" />€
            <label>à</label>
            <input class="input_fitre" type="text" v-model="prixMax" id="prixMax" />€
          </div>
        </div>
      </div>
      <h2>CONDITION</h2>
      <!-- Filtrage par Année -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Année</h2>
          <button @click="afficherAnnee = !afficherAnnee" class="toggle-button">
            {{ afficherAnnee ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherAnnee">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="annee" />
          </div>
        </div>
      </div>
      <!-- Filtrage par Kilométrage -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Kilométrage</h2>
          <button @click="afficherKilometrage = !afficherKilometrage" class="toggle-button">
            {{ afficherKilometrage ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherKilometrage">
          <div class="input_box_fitre">
            <label>De</label>
            <input class="input_fitre" type="text" v-model="kilometrageMin" />km
            <label>à</label>
            <input class="input_fitre" type="text" v-model="kilometrageMax" />km
          </div>
        </div>
      </div>
      <h2>ASSISTANCE ELECTRIQUE</h2>
      <!-- Filtrage par Position du Moteur -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Position du Moteur</h2>
          <button @click="afficherPositionMoteur = !afficherPositionMoteur" class="toggle-button">
            {{ afficherPositionMoteur ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherPositionMoteur">
          <div class="input_box_fitre">
            <input class="input_fitre" type="checkbox" v-model="positionMoteur" />
          </div>
        </div>
      </div>
      <!-- Filtrage par Marque Moteur -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Marque du Moteur</h2>
          <button @click="afficherMarqueMoteur = !afficherMarqueMoteur" class="toggle-button">
            {{ afficherMarqueMoteur ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherMarqueMoteur">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="marqueMoteurId" />
          </div>
        </div>
      </div>
      <!-- Filtrage par Couple moteur -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Couple moteur</h2>
          <button @click="afficherCoupleMoteur = !afficherCoupleMoteur" class="toggle-button">
            {{ afficherCoupleMoteur ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherCoupleMoteur">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="coupleMoteur" />+ Nm
          </div>
        </div>
      </div>
      <h2>BATTERIE ET AUTONOMIE</h2>
      <!-- Filtrage par Capacité batterie -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Capacité batterie</h2>
          <button @click="afficherCapaciteBatterie = !afficherCapaciteBatterie" class="toggle-button">
            {{ afficherCapaciteBatterie ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherCapaciteBatterie">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="capaciteBatterie" />+ Wh
          </div>
        </div>
      </div>
      <!-- Filtrage par Position Batterie -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Position Batterier</h2>
          <button @click="afficherPositionBatterie = !afficherPositionBatterie" class="toggle-button">
            {{ afficherPositionBatterie ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherPositionBatterie">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="positionBatterie" />
          </div>
        </div>
      </div>
      <!-- Filtrage par Batterie Amovible -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Batterie Amovible</h2>
          <button @click="afficherBatterieAmovible = !afficherBatterieAmovible" class="toggle-button">
            {{ afficherBatterieAmovible ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherBatterieAmovible">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="batterieAmovible" />
          </div>
        </div>
      </div>
      <h2>COMPOSANTS ET EQUIPEMENT</h2>
      <!-- Filtrage par Position Porte Baguage -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Position Porte Baguage</h2>
          <button @click="afficherPositionPB = !afficherPositionPB" class="toggle-button">
            {{ afficherPositionPB ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherPositionPB">
          <div class="input_box_fitre">
            <input class="input_fitre" type="text" v-model="positionPorteBaguage"/>
          </div>
        </div>
      </div>
      <!-- Filtrage par Poids -->
      <div class="fitre">
        <div class="filtre_name_button">
          <h2>Poids</h2>
          <button @click="afficherPoids = !afficherPoids" class="toggle-button">
            {{ afficherPoids ? '⬇' : '➡' }}
          </button>
        </div>
        <div class="depliant_fitre" v-show="afficherPoids">
          <div class="input_box_fitre">
            < <input class="input_fitre" type="text" v-model="poids" />kg
          </div>
        </div>
      </div>
    </div>

    <!-- Affichage des velos filtrés -->
    <div class="velos_container">
      <ProductCard
        :key="velo.veloId"
        v-for="velo in velos.list"
        :title="velo.nomVelo"
        :description="`${velo.anneeVelo} ${velo.tailleMin}- ${velo.tailleMax}`"
        :price="velo.prixRemise"
        :img="getImage(velo.veloId)"
        :link="{
          path: '/velo/' + velo.veloId,
        }"
      />
    </div>
  </div>

  <!-- Pagination -->
  <div class="pagination">
    <button class="button_pagination" v-if="velos.current_page > 0" @click="velos.fetchBikes(0)">
      <FontAwesomeIcon :icon="faBackward" />
    </button>
    <button class="button_pagination" v-if="velos.current_page > 0" @click="velos.fetchBikes(velos.current_page - 1)">
      <FontAwesomeIcon :icon="faArrowLeft" />
    </button>

    <div v-for="i in [3, 2, 1]" :key="i">
      <button class="button_pagination" v-if="velos.current_page - i >= 0" @click="velos.fetchBikes(velos.current_page - i)">
        {{ velos.current_page - i + 1 }}
      </button>
    </div>

    <button class="button_pagination" disabled>{{ velos.current_page + 1 }}</button>

    <div v-for="i in 3" :key="i">
      <button class="button_pagination" v-if="velos.current_page + i <= velos.total_pages" @click="velos.fetchBikes(velos.current_page + i)">
        {{ velos.current_page + i + 1 }}
      </button>
    </div>

    <button class="button_pagination" v-if="velos.current_page < velos.total_pages" @click="velos.fetchBikes(velos.current_page + 1)">
      <FontAwesomeIcon :icon="faArrowRight" />
    </button>
    <button class="button_pagination" v-if="velos.current_page != velos.total_pages" @click="velos.fetchBikes(velos.total_pages)">
      <FontAwesomeIcon :icon="faForward" />
    </button>
  </div>
</template>

<style scoped>
.filtre_name_button{
  display: flex;  
  justify-content: space-between;
}
.toggle-button {
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}
.velos_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
}
.velos_fitre_container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin: 0 auto;
}
.velos_fitre {
  position: sticky;
  justify-content: center;
  top: 20px;
  height: auto;
  min-height: 300px;
  background: rgba(240, 240, 240, 0.9);
  width: 20%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 300px;
}
.fitre h2 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}
.depliant_fitre {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}
.input_box_fitre {
  display: flex;
  align-items: center;
  gap: 8px;
}
.input_fitre {
  width: 80px;
  padding: 5px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  font-size: 14px;
  text-align: center;
  transition: all 0.3s ease;
}
.input_fitre:focus {
  border-color: #007bff;
  background-color: white;
}
.fitre {
  justify-content: center;
}

.pagination {
  display: flex;
  justify-content: center;
  width: 100%;
}

.button_pagination {
  margin: 10px;
  margin-bottom: 50px;
  width: 50px;
  height: 50px;
}
h1 {
  margin-left: 6%;
}
p {
  margin-left: 6%;
  width: 80%;
}
</style>
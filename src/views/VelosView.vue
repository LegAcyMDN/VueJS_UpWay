<script setup>
import ProductCard from '../components/ProductCard.vue'
import { useVelosStore } from '@/stores/velos'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, watch } from 'vue'
import { faBackward, faArrowLeft, faForward, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const velos = useVelosStore()
const images = ref({})

// ref pour contrôler l'affichage des filtre
const afficherPrix = ref(true)
const afficherCategorie = ref(false)

// Valeurs des filtres
const categoryId = ref(null)
const prixMin = ref(0)
const prixMax = ref(799)

function getImage(id) {
  return images.value[id] == undefined ? undefined : images.value[id][0].urlPhotoVelo
}

watch(
  () => velos.list,
  async () => {
    images.value = await velos.getPhotosByIds(velos.list.map((a) => a.veloId))
  },
)
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
      <!-- Filtrage par prix -->
      <div class="fitre_prix">
        <h2>Prix</h2>
        <button @click="afficherPrix = !afficherPrix" class="toggle-button">
          {{ afficherPrix ? '⬇' : '➡' }}
        </button>
        <div class="depliant_prix" v-show="afficherPrix">
          <div class="input_box_prix">
            <label>De</label>
            <input class="input_prix" type="text" v-model="prixMin" />€
          </div>
          <div class="input_box_prix">
            <label>à</label>
            <input class="input_prix" type="text" v-model="prixMax" />€
          </div>
        </div>
      </div>
      <!-- Filtrage par categorie -->
      <div class="fitre_prix">
        <h2>Categorie</h2>
        <button @click="afficherCategorie = !afficherCategorie" class="toggle-button">
          {{ afficherCategorie ? '⬇' : '➡' }}
        </button>
        <div class="depliant_prix" v-show="afficherCategorie">
          <div class="input_box_prix">
            <label>De</label>
            <input class="input_prix" type="number" v-model="categoryId" />€
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
    <button v-if="velos.current_page > 0" @click="velos.fetchBikes(0)">
      <FontAwesomeIcon :icon="faBackward" />
    </button>
    <button v-if="velos.current_page > 0" @click="velos.fetchBikes(velos.current_page - 1)">
      <FontAwesomeIcon :icon="faArrowLeft" />
    </button>

    <div v-for="i in [3, 2, 1]" :key="i">
      <button
        v-if="velos.current_page - i >= 0"
        @click="velos.fetchBikes(velos.current_page - i)"
      >
        {{ velos.current_page - i + 1 }}
      </button>
    </div>

    <button disabled>{{ velos.current_page + 1 }}</button>

    <div v-for="i in 3" :key="i">
      <button
        v-if="velos.current_page + i <= velos.total_pages"
        @click="velos.fetchBikes(velos.current_page + i)"
      >
        {{ velos.current_page + i + 1 }}
      </button>
    </div>

    <button
      v-if="velos.current_page < velos.total_pages"
      @click="velos.fetchBikes(velos.current_page + 1)"
    >
      <FontAwesomeIcon :icon="faArrowRight" />
    </button>
    <button
      v-if="velos.current_page != velos.total_pages"
      @click="velos.fetchBikes(velos.total_pages)"
    >
      <FontAwesomeIcon :icon="faForward" />
    </button>
  </div>
</template>

<style scoped>
.toggle-button {
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}
.toggle-button:hover {
  background-color: #0056b3;
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
  min-width: 141px;
}
.fitre_prix h2 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}
.depliant_prix {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}
.input_box_prix {
  display: flex;
  align-items: center;
  gap: 8px;
}
.input_prix {
  width: 80px;
  padding: 5px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  font-size: 14px;
  text-align: center;
  transition: all 0.3s ease;
}
.input_prix:focus {
  border-color: #007bff;
  background-color: white;
}
.fitre_prix {
  justify-content: center;
}

.pagination {
  display: flex;
  justify-content: center;
  width: 100%;
}

button {
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

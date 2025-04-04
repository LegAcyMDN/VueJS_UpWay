<script setup>
import ProductCard from '../components/ProductCard.vue'
import { useAccessoiresStore } from '@/stores/accessoires'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBackward, faArrowLeft, faForward, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { ref, watch } from 'vue'

const accessoires = useAccessoiresStore()
const images = ref({})
const prixMin = 0
const prixMax = 799

function getImage(id) {
  return images.value[id] == undefined ? undefined : images.value[id][0].urlPhotoAccessoire
}

watch(
  () => accessoires.list,
  async () => {
    images.value = await accessoires.getPhotosByIds(accessoires.list.map((a) => a.accessoireId))
  },
)
</script>

<template>
  <h1>Accessoires vélo électrique</h1>
  <p>
    Vous cherchez des accessoires pour votre vélo électrique ? Découvrez notre choix de références
    ainsi que nos conseils pour sécuriser votre vélo, profiter d’une amélioration du confort de
    conduite, personnaliser ou encore entretenir votre VAE.
  </p>
  <div class="accessoires_fitre_container">
    <div class="accessoires_fitre">
      <div class="fitre_prix">
        <h2>FILTRER</h2>
        <h2>Prix</h2>
        <div class="depliant_prix">
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
    </div>
    <div class="accessoires_container">
      <ProductCard
        :key="accessoire.accessoireId"
        v-for="accessoire in accessoires.list"
        :title="accessoire.nomAccessoire"
        :price="accessoire.prixAccessoire"
        :img="getImage(accessoire.accessoireId)"
        :link="{ path: '/accessoire/' + accessoire.accessoireId }"
      />
    </div>
  </div>
  <div class="pagination">
    <button v-if="accessoires.current_page > 0" @click="accessoires.fetchAccessories(0)">
      <FontAwesomeIcon :icon="faBackward" />
    </button>
    <button
      v-if="accessoires.current_page > 0"
      @click="accessoires.fetchAccessories(accessoires.current_page - 1)"
    >
      <FontAwesomeIcon :icon="faArrowLeft" />
    </button>

    <div
      v-for="i in [...Array(accessoires.current_page < accessoires.total_pages ? 3 : 6).keys()]
        .slice()
        .reverse()"
      :key="i"
    >
      <button
        v-if="accessoires.current_page - i - 1 >= 0"
        @click="accessoires.fetchAccessories(accessoires.current_page - i - 1)"
      >
        {{ accessoires.current_page - i }}
      </button>
    </div>

    <button disabled>{{ accessoires.current_page + 1 }}</button>

    <div v-for="i in accessoires.current_page <= 1 ? 6 : 3" :key="i">
      <button
        v-if="accessoires.current_page + i <= accessoires.total_pages"
        @click="accessoires.fetchAccessories(accessoires.current_page + i)"
      >
        {{ accessoires.current_page + i + 1 }}
      </button>
    </div>

    <button
      v-if="accessoires.current_page < accessoires.total_pages"
      @click="accessoires.fetchAccessories(accessoires.current_page + 1)"
    >
      <FontAwesomeIcon :icon="faArrowRight" />
    </button>
    <button
      v-if="accessoires.current_page != accessoires.total_pages"
      @click="accessoires.fetchAccessories(accessoires.total_pages)"
    >
      <FontAwesomeIcon :icon="faForward" />
    </button>
  </div>
</template>

<style scoped>
.accessoires_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
}
.accessoires_fitre_container {
  display: flex;
  gap: 20px; /* Ajoute un espace entre les éléments */
  align-items: flex-start; /* Aligner en haut */
  margin: 0 auto;
}
.accessoires_fitre {
  position: sticky;
  justify-content: center;
  top: 20px; /* Ajout d'un espace en haut */
  height: auto; /* Permet à la hauteur de s'adapter au contenu */
  min-height: 300px;
  background: rgba(240, 240, 240, 0.9); /* Gris clair avec transparence */
  width: 20%;
  padding: 20px;
  border-radius: 10px; /* Coins arrondis */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* Ombre douce */
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

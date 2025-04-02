<script setup>
import ProductCard from '../components/ProductCard.vue'
import { useAccessoiresStore } from '@/stores/accessoires'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBackward, faArrowLeft, faForward, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const accessoires = useAccessoiresStore()

async function loadImage(accessoire) {
  return (await accessoires.getPhotosById(accessoire.accessoireId))[0].urlPhotoAccessoire
}
</script>

<template>
  <h1>Accessoires vélo électrique</h1>
  <p>
    Vous cherchez des accessoires pour votre vélo électrique ? Découvrez notre choix de références
    ainsi que nos conseils pour sécuriser votre vélo, profiter d’une amélioration du confort de
    conduite, personnaliser ou encore entretenir votre VAE.
  </p>
  <div class="accessoires_container">
    <ProductCard
      :key="accessoire.accessoireId"
      v-for="accessoire in accessoires.list"
      :title="accessoire.nomAccessoire"
      :price="accessoire.prixAccessoire"
      :imgFuture="loadImage(accessoire)"
      :link="{
        path: '/accessoire/' + accessoire.accessoireId,
      }"
    />
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

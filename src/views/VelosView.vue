<script setup>
import ProductCard from '../components/ProductCard.vue'
import { useVelosStore } from '@/stores/velos'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, watch } from 'vue'
import { faBackward, faArrowLeft, faForward, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const velos = useVelosStore()
const images = ref({})

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
  <main>
    <h1 class="h1-velo">Vélos d'occasion : vélos reconditionnés aux meilleures prix</h1>
    <p>
      Découvrez tous nos modèles de vélos électriques, reconditionnés par une équipe de
      professionnels, accessibles à tous et garantis un an.
    </p>
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
  </main>
</template>

<style scoped>
main {
  width: 100%;
}
.velos_container {
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
</style>

<script setup>
import { ref } from 'vue'
import { toRefs } from '@vue/reactivity'
import axios from 'axios'
import { useAccessoiresStore } from '@/stores/accessoires'

const accessoires = useAccessoiresStore()

const props = defineProps({
  accessoire: {
    required: true,
  },
})

const { accessoire } = toRefs(props)
const marque = ref({})
const categorie = ref({})
const photos = ref({})

// Récupération des données de l' API
axios
  .get(import.meta.env.VITE_BACKEND_URL + '/Marques/GetById/' + accessoire.value.marqueId)
  .then((res) => {
    marque.value = res.data
  })
axios
  .get(import.meta.env.VITE_BACKEND_URL + '/Categories/GetById/' + accessoire.value.categorieId)
  .then((res) => {
    categorie.value = res.data
  })

accessoires.getPhotoById(accessoire.value.accessoireId).then((photo) => {
  photos.value = photo
})
</script>

<template>
  <div>
    <router-link
      :to="{
        path: '/accessoire/' + accessoire.accessoireId,
        params: { id: accessoire.accessoireId },
      }"
    >
      <button class="accessoire">
        <!-- Vérification si port 5173 si probléme cors -->
        <img
          v-if="photos[0]?.urlPhotoAccessoire"
          :src="photos[0].urlPhotoAccessoire"
          alt="Image de l'accessoire"
        />
        <h3>{{ accessoire.nomAccessoire }}</h3>
        <p>{{ accessoire.prixAccessoire }}€</p>
      </button>
    </router-link>
  </div>
</template>

<style scoped>
img {
  width: 500px;
  background-color: lightgrey;
}
div {
  margin: 50px;
}
.accessoire {
  background-color: white;
  border-color: white;
  border: 0px;
}
</style>

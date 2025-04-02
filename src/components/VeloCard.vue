<script setup>
import { ref, watch } from 'vue'
import { toRefs } from '@vue/reactivity'
import { useVelosStore } from '@/stores/velos'

const velos = useVelosStore()

const props = defineProps({
  velo: {
    required: true,
  },
})

const { velo } = toRefs(props)
const photos = ref({})

const loadPhotos = () => {
  if (velo.value && velo.value.veloId) {
    velos.getPhotosById(velo.value.veloId).then((data) => {
      photos.value = data
    })
  }
}

loadPhotos()

// pagination does not refresh photos...
watch(
  () => velo.value.veloId,
  () => {
    loadPhotos()
  },
)
</script>

<template>
  <div>
    <router-link
      :to="{
        path: '/velo/' + velo.veloId,
        params: { id: velo.veloId },
      }"
    >
      <button class="velo">
        <!-- Vérification si port 5173 si probléme cors -->
        <img v-if="photos[0]?.urlPhotoVelo" :src="photos[0].urlPhotoVelo" alt="Photo du vélo" />
        <h3 class="titre_velo">{{ velo.nomVelo }}</h3>
        <p>{{ velo.anneeVelo }} {{ velo.tailleMin }}- {{ velo.tailleMax }}</p>
        <p class="prixvelo">{{ velo.prixRemise }}€</p>
      </button>
    </router-link>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.velo {
  background-color: white;
  border: 2px solid white;
  margin: 10px 10px 10px;
  width: 350px;
  height: 350px;
  cursor: pointer;
}
.titre_velo {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.prixvelo {
  font-size: 25px;
  font-weight: bold;
}
p {
  text-align: center;
}
</style>

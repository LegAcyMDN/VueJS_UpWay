<script setup>
import { ref, watch } from 'vue'
import { toRefs } from '@vue/reactivity'
import { useAccessoiresStore } from '@/stores/accessoires'

const accessoires = useAccessoiresStore()

const props = defineProps({
  accessoire: {
    required: true,
  },
})

const { accessoire } = toRefs(props)
const photos = ref({})

const loadPhotos = () => {
  if (accessoire.value && accessoire.value.accessoireId) {
    accessoires.getPhotosById(accessoire.value.accessoireId).then((photo) => {
      photos.value = photo
    })
  }
}

loadPhotos()

watch(
  () => accessoire.value.accessoireId,
  () => {
    loadPhotos()
  },
)
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
  width: 450px;
  height: 350px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: lightgrey;
}
.accessoire {
  background-color: white;
  border-color: white;
  border: 0px;
}
div {
  border: 2px solid white;
  margin: 10px 100px 100px 10px;
  width: 400px;
  height: 400px;
  cursor: pointer;
}
h3 {
  width: 400px;
  font-size: 17px;
}
p {
  width: 400px;
  font-size: 25px;
  font-weight: bold;
}
</style>

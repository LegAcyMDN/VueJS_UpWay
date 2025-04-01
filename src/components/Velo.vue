<script setup>
import { ref, watch } from 'vue';
import { toRefs } from '@vue/reactivity';
import { useVelosStore } from '@/stores/velos';

const velos = useVelosStore();

const props = defineProps({
  velo: {
    required: true,
  },
});

const { velo } = toRefs(props);
const photos = ref({});

const loadPhotos = () => {
  if (velo.value && velo.value.veloId) {
    velos.getPhotoById(velo.value.veloId).then(res => {
      photos.value = res.data;
    });
  }
};

loadPhotos();

watch(() => velo.value.veloId, () => {
  loadPhotos();
});

</script>


<template>
  
    <div>
      <img v-if="photos[0]?.urlPhotoVelo" :src="photos[0].urlPhotoVelo" alt="Photo du vélo"/>     
      <h3 class="titre_velo">{{ velo.nomVelo}}</h3>
      <p>{{ velo.anneeVelo }}  {{ velo.tailleMin  }}- {{  velo.tailleMax }}</p>
      <p class="prixvelo">{{ velo.prixRemise }}€</p>
    </div>
</template>

<style scoped>
img{
    width: 100%;
    height:250px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
div{
    border: 2px solid white;
    margin: 10px 10px 10px;
    width: 350px;
    height: 350px;
    cursor: pointer;
}
.titre_velo{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.prixvelo{
  font-size: 15px;
  font-weight: bold;
}
p{
  text-align: center;
}
</style>
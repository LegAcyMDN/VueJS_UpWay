<script setup>
import { ref } from 'vue';
import { toRefs } from '@vue/reactivity'
import axios from 'axios';


const props = defineProps({
  velo: {
    required: true,
  },
})
 
const { velo } = toRefs(props);
var photos = ref({});
// Récupération des données de l' API


axios.get("https://s401-dev.redboxing.moe/api/Velos/GetPhotosById/" + velo.value.veloId).then(res => {
   photos.value = res.data
})

</script>

<template>
    <!-- <img :src="{{ photos[0].urlPhotoVelo }}"/> -->
    <RouterLink to="/">
    <div>
      <img v-if="photos.length > 0" :src="photos[0].urlPhotoVelo" alt="Photo du vélo"/>     
      <h3 class="titre_velo">{{ velo.nomVelo}}</h3>
      <p>{{ velo.anneeVelo }}  {{ velo.tailleMin  }}- {{  velo.tailleMax }}</p>
      <p class="prixvelo">{{ velo.prixRemise }}€</p>
    </div>
  </RouterLink>
    <!-- <button @click="accessoires.cart.push(data)"> Ajouter au panier</button> -->
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
<script setup>
import Velo from '../components/Velo.vue'
import { useVelosStore } from '@/stores/velos';

const velos = useVelosStore()

//<span>Page : {{ (parseInt(velos.list[0].veloId)-1)/20 +1 }}  </span>

const currentPage = velos.list[0]
//currentPage = currentPage.veloId



</script>

<template>
  <main>
    <p>{{currentPage}}</p>
    <h1 class="h1-velo">Vélos d'occasion : vélos reconditionnés aux meilleures prix</h1>
    <p>Découvrez tous nos modèles de vélos électriques, reconditionnés par une équipe de professionnels, accessibles à tous et garantis un an.</p>
    <div class="velos_container">
      <Velo v-for="velo in velos.list" :velo="velo"/>
    </div>
    <div class="pagination">
      <button class="button_velos_page" @click="velos.fetchBikes(0)">Page 1</button>
      <button class="button_velos_page" @click="fetchBikes(1)">Page 2</button>
      <button class="button_velos_page" @click="fetchBikes(2)">Page 3</button>
      
    </div>
  </main>
</template>

<style>
.velos_container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 6%;
}
.pagination {
  margin-left: 44%;
}

.button_velos_page {
  margin: 10px;
  margin-bottom: 50px;
  width: 50px;
  height: 50px;
}
</style>
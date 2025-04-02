<script setup>
import VeloCard from '../components/VeloCard.vue'
import { useVelosStore } from '@/stores/velos'

const velos = useVelosStore()
</script>

<template>
  <main>
    <h1 class="h1-velo">Vélos d'occasion : vélos reconditionnés aux meilleures prix</h1>
    <p>
      Découvrez tous nos modèles de vélos électriques, reconditionnés par une équipe de
      professionnels, accessibles à tous et garantis un an.
    </p>
    <div class="velos_container">
      <VeloCard v-for="velo in velos.list" :velo="velo" />
    </div>
    <div class="pagination">
      <button @click="velos.fetchBikes(0)">1</button>
      <button @click="velos.fetchBikes(1)">2</button>
      <button @click="velos.fetchBikes(2)">3</button>
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

button {
  margin: 10px;
  margin-bottom: 50px;
  width: 50px;
  height: 50px;
}
</style>

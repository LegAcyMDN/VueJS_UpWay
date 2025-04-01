<script setup>
import Accessoires from '../components/Accessoires.vue'
import { useAccessoiresStore } from '@/stores/accessoires';

const accessoires = useAccessoiresStore()
</script>

<template>
  <h1>Accessoires vélo électrique</h1>
  <p>Vous cherchez des accessoires pour votre vélo électrique ? Découvrez notre choix de références ainsi que nos conseils pour sécuriser votre vélo, profiter d’une amélioration du confort de conduite, personnaliser ou encore entretenir votre VAE.</p>
   <div class="accessoires_container">
    <Accessoires v-for="accessoire in accessoires.list" :accessoire="accessoire"/>
  </div>
  <div class="pagination">
      <button @click="accessoires.fetchAccessories(0)">1</button>
      <button @click="accessoires.fetchAccessories(1)">2</button>
      <button @click="accessoires.fetchAccessories(2)">3</button>
      <button @click="accessoires.fetchAccessories(3)">4</button>
      <button @click="accessoires.fetchAccessories(4)">5</button>
      
    </div>
</template>

<style>
.accessoires_container {
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
h1{
  margin-left:6%;
}
p{
  margin-left:6%;
  width:80%;
}
</style>

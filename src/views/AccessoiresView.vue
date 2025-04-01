<script setup>
import Accessoires from '../components/Accessoires.vue'
import { useAccessoiresStore } from '@/stores/accessoires';

const accessoires = useAccessoiresStore()

const currentPage = accessoires.list[0]
//currentPage = currentPage.veloId
</script>

<template>
  <main>
    <p>{{currentPage}}</p>
    <h1 class="h1-velo">Accessoires vélo électrique</h1>
    <p>Vous cherchez des accessoires pour votre vélo électrique ? Découvrez notre choix de références ainsi que nos conseils pour sécuriser votre vélo, profiter d’une amélioration du confort de conduite, personnaliser ou encore entretenir votre VAE.</p>
    <div class="accessoires_container">
      <Accessoires v-for="accessoire in accessoires.list" :accessoire="accessoire"/>
    </div>
    <div class="pagination">
      <button class="button_accessoires_page" @click="accessoires.fetchAccessoires(0)">Page 1</button>
      <button class="button_accessoires_page" @click="fetchAccessoires(1)">Page 2</button>
      <button class="button_accessoires_page" @click="fetchAccessoires(2)">Page 3</button>
    </div>
  </main>
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

.button_accessoires_page {
  margin: 10px;
  margin-bottom: 50px;
  width: 50px;
  height: 50px;
}
</style>

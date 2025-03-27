<script setup>
import Velo from '../components/Velo.vue'
import { useVelosStore } from '@/stores/velos';

const velos = useVelosStore()
</script>

<template>
  <main>
    <h1 class="h1-velo">Vélos d'occasion : vélos reconditionnés aux meilleures prix</h1>
    <p>Découvrez tous nos modèles de vélos électriques, reconditionnés par une équipe de professionnels, accessibles à tous et garantis un an.</p>
    <div class="velos_container">
      <Velo v-for="velo in velos.list" :velo="velo"/>
    </div>
  </main>
</template>

<style>
.velos_container {
  display: flex;
  flex-wrap: wrap;
}
</style>

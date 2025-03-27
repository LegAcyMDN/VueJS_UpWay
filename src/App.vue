<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Entete from './components/Entete.vue'
</script>

<template>
  <header>
    <Entete></Entete>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

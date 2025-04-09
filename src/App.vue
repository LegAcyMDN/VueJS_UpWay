<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Entete from './components/Entete.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <Entete></Entete>
  </header>

  <RouterView />
  <Footer></Footer>
</template>

<style scoped>

</style>

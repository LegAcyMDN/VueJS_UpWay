<script setup>
import Accessoire from '../components/Accessoire.vue'
import { useAccessoiresStore } from '@/stores/accessoires';

const accessoires = useAccessoiresStore()
</script>

<template>
  <main>
    <p>En construction</p>
    <div>
      <Accessoire v-for="accessoire in accessoires.list" :accessoire="accessoire"/>
    </div>
  </main>
</template>

<style>
</style>

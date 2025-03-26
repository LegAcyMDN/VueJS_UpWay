<script setup>
import Accessoires from '../components/Accessoires.vue'
import { useAccessoiresStore } from '@/stores/accessoires';

const accessoires = useAccessoiresStore()
</script>

<template>
  <main>
    <div>
      <Accessoires v-for="accessoire in accessoires.list" :accessoire="accessoire"/>
    </div>
  </main>
</template>

<style>
</style>

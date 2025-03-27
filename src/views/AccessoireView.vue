<script setup>
import Accessoire from '../components/Accessoire.vue'
import { useAccessoiresStore } from '@/stores/accessoires';

const accessoires = useAccessoiresStore()
</script>

<template>
  <main>
    <div>
      <Accessoire/>
    </div>
  </main>
</template>

<style>
</style>

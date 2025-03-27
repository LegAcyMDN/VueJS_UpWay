<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useUserStore } from './stores/user.js'
import Entete from './components/Entete.vue'

const userStore = useUserStore()
</script>

<template>
  <header>
    <Entete></Entete>

    <nav>
      <p v-if="userStore.connected">currently logged as: {{ userStore.current.loginClient }}</p>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/auth" v-if="!userStore.connected">Login / Register</RouterLink>
      <button @click="userStore.logout()" v-else>Logout</button>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

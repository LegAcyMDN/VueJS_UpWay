<script setup>
    import { useUserStore } from '@/stores/user'
    const userStore = useUserStore()

    function deleteClient(id) {
        userStore.deleteClient(id)
        userStore.logout()  
    }
</script>

<template>

    <h1 v-if="userStore.connected" id="user-name">Bonjour, {{ userStore.current.loginClient }}</h1>

    <h2>Information personnelle</h2>
    <p> Prenom : {{ userStore.current.prenomClient }}</p>
    <p> Nom : {{ userStore.current.nomClient }}</p>
    <p> Mail : {{ userStore.current.emailClient }}</p>

    <router-link to="/"><button @click="deleteClient(userStore.current.clientId)">Supprimer mon compte</button></router-link>
    
</template>
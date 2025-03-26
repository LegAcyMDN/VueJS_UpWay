<script setup>
defineProps({
    magasin: {
        required: true,
    },
})
</script>

<template>
    <h3>{{ magasin.nomMagasin }}</h3>
    <p>{{ magasin.horaireMagasin }}</p>
    <p>{{ magasin.rueMagasin }} </p>
    <p>{{ magasin.cpMagasin }} {{ magasin.villeMagasin }}</p>
</template>

<style scoped>

</style>
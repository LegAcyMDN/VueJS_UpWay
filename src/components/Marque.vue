<script setup>
defineProps({
    marque: {
        required: true,
    },
})
</script>

<template>
    <h3>{{ marque.nomMarque }}</h3>
</template>
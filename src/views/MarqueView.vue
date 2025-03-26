<script setup>
import Marque from '@/components/Marque.vue'
import { useMarquesStore } from '@/stores/marques'

const marques = useMarquesStore()
</script>

<template>
    <main>
        <div>
            <Marque v-for="marque in marques.list" :marque="marque"/>
        </div>
    </main>
</template>
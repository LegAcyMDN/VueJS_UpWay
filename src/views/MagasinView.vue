<script setup>
import Magasin from '@/components/Magasin.vue'
import { useMagasinsStore } from '@/stores/magasins'

const magasins = useMagasinsStore()
</script>

<template>
    <main>
        <div>
            <Magasin v-for="magasin in magasins.list" :magasin="magasin"/>
        </div>
    </main>
</template>
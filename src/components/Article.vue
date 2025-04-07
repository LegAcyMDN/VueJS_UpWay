<script setup>
import { ref, watch } from 'vue'
import { toRefs } from '@vue/reactivity'

const props = defineProps({
  title: {
    required: true,
  },
  content: {
    required: true,
  },
})
</script>

<template>
    <div>
    <h1>{{ title }}</h1>
    <p v-if="content">{{ content }}</p>
      
    </div>
</template>
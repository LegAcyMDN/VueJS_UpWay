<script setup>
import { ref, watch } from 'vue'
import { toRefs } from '@vue/reactivity'

const props = defineProps({
  title: {
    required: true,
  },
  description: {
    required: false,
  },
  price: {
    required: true,
  },
  img: {
    required: false,
  },
  imgFuture: {},
  link: {
    required: true,
  },
})

const { img, imgFuture } = toRefs(props)
const finalImg = ref(img.value)

if (imgFuture.value != undefined) {
  imgFuture.value.then((src) => {
    finalImg.value = src
  })
}
</script>

<template>
  <router-link class="product-card" :to="link">
    <!-- Vérification si port 5173 si probléme cors -->
    <img v-if="finalImg" :src="finalImg" alt="Photo du produit" />
    <h3 class="product-card-title">{{ title }}</h3>
    <p v-if="description">{{ description }}</p>
    <p class="product-card-price">{{ price }}€</p>
  </router-link>
</template>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.product-card {
  background-color: rgb(240, 240, 240);
  border: 2px solid white;
  margin: 10px;
  width: 350px;
  height: 350px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 10px;
  transition: 0.25s;
  color: black;
  overflow: hidden;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card-title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.product-card-price {
  font-size: 25px;
  font-weight: bold;
}

p {
  text-align: center;
}
</style>

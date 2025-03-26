<script setup>
</script>

<template>
  <img src="https://cdn.shopify.com/s/files/1/0591/7769/7445/files/Upway_Logo_RGB_Dark_Blue-cropped.png?v=1737388577&width=900" alt="UPWAY">
    <nav>
        <div>
          <li><router-link to="/"> Accueil</router-link></li>
          <li><router-link to="/about"> Informations à propos de nous</router-link></li>
          <li><router-link to="/velos"> Vélos</router-link></li>
          <li><router-link to="/accessoires"> Nos Accessoires</router-link></li>
          <li><router-link to="/articles"> Actualités</router-link></li>
          <li><router-link to="/marques"> Marques</router-link></li>
          <li><router-link to="/magasins"> Magasins</router-link></li>
        </div>
    </nav>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
<script setup>
import { useVelosStore } from '@/stores/velos'

const veloStore = useVelosStore()
</script>

<template>
  <main>
    <div id="position">
      <div class="overlay"></div>
      <div id="diapo">
        <h1 style="line-height: 0.8; margin: 0 0 20px 0;">L'expert du vélo<br> électrique reconditionné</h1>
        <p style="font-size: 1.5rem; line-height: 1.5;">Votre vélo électrique à petit prix. 14 jours<br> pour changer d'avis, 1 an de garantie.</p>
      </div>
  
  
      <div id="ideal-velo">
        <h2 style="font-size: 1.35rem;">Trouver le vélo idéal</h2>
  
        <p style="font-size: 1rem;">Quelle est votre taille ?</p>
  
        <div id="input-size">
          <div id="input-container">
            <input type="text" name="size" id="size" placeholder="175" style="color: gray;">
    
            <span style="color: black;">cm</span>
          </div>
        </div>
  
        <p style="font-size: 1rem;">Quel type de vélo électrique cherchez-vous ?</p>
  
        <div id="input-category">
          <div id="select-container">
            <select name="category" id="category" style="color: gray;">
              <option value="">Sélectionner une catégorie</option>
            </select>
          </div>
        </div>
  
        <button id="search-velo">
          <span>Voir nos {{ veloStore.countVelos }} vélos</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.62012 3.95333L13.6668 8L9.62012 12.0467" stroke="#EDEDED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.3335 8H13.5535" stroke="#EDEDED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  color: rgb(255, 255, 255);
}

#position {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  padding: 0 4.5%;
  position: relative;
  background-image: url('https://cdn.shopify.com/s/files/1/0591/7769/7445/files/Home_Hero_Photo.jpg?v=1735896581&width=2560');
  background-size: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  filter: brightness(0.9);
  z-index: 1;
}

#position > * {
  z-index: 2;
}

#ideal-velo {
  margin: 25px 0 0 0;
  padding: 25px 20px;
  width: 335px;
  background-color: rgba(255, 255, 255, 0.250);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

#ideal-velo h2 {
  margin: 0 0 20px 0;
}

#ideal-velo div {
  margin: 0 0 15px 0;
}

#ideal-velo p {
  margin: 0 0 10px 0;
}

#input-size, #input-category {
  height: 40px;
  background-color: rgb(237, 236, 239);
  padding: 0 15px 0 15px;
  border-radius: 5px;
}

#input-size p {
  font-weight: bold;
}

#input-container, #select-container {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

#size, #category {
  height: calc(100% - 4px);
  width: 100%;
  background-color: transparent;
  border: none;
}

#size:focus, #category:focus {
  outline: none;
}

#search-velo {
  background-color: rgba(71, 51, 255, 1);
  height: 40px;
  width: 100%;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
</style>
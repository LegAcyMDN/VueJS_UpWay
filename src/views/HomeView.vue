  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useVelosStore } from '@/stores/velos'
  import { useCategoriesStore } from '@/stores/category'

  const velosCount = ref("")
  const velosStore = useVelosStore()

  velosStore.count().then(count => velosCount.value = count)
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
            <span>Voir nos {{ velosCount }} vélos</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.62012 3.95333L13.6668 8L9.62012 12.0467" stroke="#EDEDED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.3335 8H13.5535" stroke="#EDEDED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>  
      
      <div id="container-carrousel" style="margin: 5% 15%;">
            <div id="carrousel-vel">
                <div id="entete-vel">
                    <div id="titre-vel">
                      <h2 style="color: black;">Les catégories de vélos électriques</h2>
                      <span style="color: black;">On vous guide dans le choix de votre vélo</span>
                    </div>
                    <div id="curseur-vel">
                        <div id="curseur-left">
                            <div id="left">
                                <svg class="caroussel-left-arrow" focusable="false" aria-hidden="true" viewBox="0 0 24 24" height="24" width="24" fill="white">
                                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                                </svg>
                            </div>
                        </div>
                        <div id="curseur-right">
                            <div id="right">
                                <svg class="caroussel-right-arrow" focusable="false" aria-hidden="true" viewBox="0 0 24 24" height="24" width="24" fill="white">
                                    <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="carrousel-track">
                    <!--A finir-->
                </div>
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

#entete-vel {
    display: flex;
    justify-content: space-between;
}

#curseur-vel {
    display: flex;
    gap: 25px;
}

#left, #right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: rgba(71, 51, 255, 1);
    border-radius: 50%;
}
</style>
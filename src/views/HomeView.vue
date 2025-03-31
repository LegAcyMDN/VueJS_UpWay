<script setup>
</script>

<template>
  <main>
    <h1>L'expert du vélon électrique reconditionné</h1>
    <p>Découvrez tous nos modèles de vélos électriques, reconditionnés par une équipe de professionnels, accessibles à tous et garantis un an.</p>


    <div id="ideal-velo">
      <h2>Trouver le vélo idéal</h2>

      <p>Quelle est votre taille ?</p>

      <div id="input-size">
        <div id="input-container">
          <input type="text" name="size" id="size" placeholder="175">
  
          <span>cm</span>
        </div>
      </div>

      <p>Quel type de vélo électrique cherchez-vous ?</p>

      <div id="input-category">
        <div id="select-container">
          <select name="category" id="category">
            <option value="" disabled="">Sélectionner une catégorie</option>
          </select>
        </div>
      </div>

      <button id="search-velo">
        <span>Voir nos x vélos</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.62012 3.95333L13.6668 8L9.62012 12.0467" stroke="#EDEDED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.3335 8H13.5535" stroke="#EDEDED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </main>
</template>

<style scoped>
#ideal-velo {
  padding: 25px 20px;
  width: 335px;
  background-color: rgba(4, 0, 255, 0.199);
  border-radius: 10px;
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
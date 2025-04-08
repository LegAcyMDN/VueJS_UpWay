<script setup>
import { ref } from 'vue'
import { useCategoriesStore } from '@/stores/category.js'

const categoriesStore = useCategoriesStore()
const nomCategorie = ref('')

function addCategorie() {
  if (nomCategorie.value.trim() === '') {
    alert("Le nom ne peut pas être vide !");
    return;
  }
  categoriesStore.post(nomCategorie.value.trim())
}

function deleteCategorie(id) {
    categoriesStore.deleteCategory(id)
}
</script>

<template>
  <div class="category">
    <h1>Categories</h1>

    <div class="list">
      <div>
        <h2>List :</h2>
        <div class="list" v-for="categorie in categoriesStore.list" :key="categorie.id">
          <p>{{ categorie.libelleCategorie }}</p>
          <button @click="deleteCategorie(categorie.categorieId)">supprimer</button>
        </div>
      </div>
      <div>
        <h2>Ajouter une categorie :</h2>
        <label>
          Nom de la Categorie :
          <input v-model="nomCategorie" type="text" />
          <button @click="addCategorie">Valider</button>
        </label>
      </div>
    </div>
  </div>
</template>


<style scoped>
    .category{
        margin-left: 10%;
        margin-top: 3%;
        margin-bottom:20%;
    }
    h2{
        font-size: 30px;
        margin-top: 3%;
        margin-bottom: 3%;
    }
    .list{
        margin-left: 3%;
        display: flex;
        gap: 40%;
        flex-direction: row;
    }
    .listcont{
        margin-left: 50%;
        width:100%;
    }
    p{
        width: 300px;
        line-height: 2;
    }
</style>

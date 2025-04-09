<script setup>
import { ref } from 'vue'
import { useCategorieArticleStore } from '@/stores/categoriearticles.js'

const categoriearticlesStore = useCategorieArticleStore()
const nomCategorie = ref('')
const contenueCategorie = ref('')
const urlPhotoCategorie = ref('')


function addCategorie() {
  if (nomCategorie.value.trim() === '') {
    alert("Le nom ne peut pas être vide !");
    return;
  }
  categoriearticlesStore.post(nomCategorie.value.trim(),contenueCategorie.value.trim(),urlPhotoCategorie.value.trim())
}

function deleteCategorie(id) {
    categoriearticlesStore.deleteCategorie(id)
}
</script>


<template>
    <div class="category">
    <h1>Categorie Article</h1>

    <div class="list">
      <div>
        <h2>List :</h2>
        <div class="list" v-for="categorie in categoriearticlesStore.list" :key="categorie.id">
          <p>{{ categorie.titreCategorieArticle }}</p>
          <button @click="deleteCategorie(categorie.categorieArticleId)">supprimer</button>
        </div>
      </div>
      <div class="listadd">
        <h2>Ajouter une categorie :</h2>
        <label class="add">
          Nom de la Categorie :
          <input v-model="nomCategorie" type="text" />
          Contenue de la Categorie :
          <textarea class="contenue" v-model="contenueCategorie" rows="5" cols="40"></textarea>
          Image de la Categorie :
          <input v-model="urlPhotoCategorie" type="text" />
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
        gap: 50px;
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
    .pagination {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .page {
      margin: 10px;
      margin-bottom: 50px;
      width: 50px;
      height: 50px;
    }
    .add{
        display: flex;
        gap: 50px;
        flex-direction: column;
    }
    .listadd{
        margin-left: 30%;
    }

    .contenue{
        resize: vertical;
        min-height: 200px;
        width: 100%;
    }
</style>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCategoriesStore } from '@/stores/category.js'

const categoriesStore = useCategoriesStore()

function addCategorie() {
    categoriesStore.post(document.getElementById("nom").innerHTML);
}

</script>

<template>
    <div class="category">
      <h1>Categories</h1>
      
        <div class="list">
            <div>
                <h2>List :</h2>
                <div class="listcont"  v-for="(categorie) in categoriesStore.list" :key="categorie.id">
                    <p>{{categorie.libelleCategorie}}</p>
                </div>
            </div>
            <div>
                <h2>Ajouter une categorie :</h2>
                <label>
                  Nom de la Categorie : 
                  <input ID="nom" type="textbox" name="peas" />
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
    }
</style>

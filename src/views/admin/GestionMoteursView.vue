<script setup>
import { ref, onMounted } from 'vue'
import { useMoteursStore } from '@/stores/moteur.js'
import { useMarquesStore } from '@/stores/marques.js'

const moteurStore = useMoteursStore()
const marqueStore = useMarquesStore()
const marqueMoteur = ref('')
const modeleMoteur = ref('')
const coupleMoteur = ref('')
const vitesseMaximal = ref('')


async function addMoteur() {
  if (modeleMoteur.value.trim() === '') {
    alert("Le nom ne peut pas être vide !");
    return;
  }
  moteurStore.post(marqueMoteur.value, modeleMoteur.value.trim(), coupleMoteur.value.trim(), vitesseMaximal.value.trim());
}


function deleteMoteur(id) {
    moteurStore.deleteMoteur(id)
}


onMounted(async () => {
  await marqueStore.fetchAllPages();
});
</script>


<template>
    <div class="category">
    <h1>Moteur</h1>

    <div class="list">
      <div>
        <h2>List :</h2>
        <div class="list" v-for="moteur in moteurStore.list" :key="moteur.id">
          <p>{{ moteur.modeleMoteur }}</p>
          <button @click="deleteMoteur(moteur.moteurId)">supprimer</button>
        </div>
      </div>
      <div class="listadd">
        <h2>Ajouter une categorie :</h2>
        <label class="add">
        Marque du Moteur :
          <select name="marque" id="marque-select" v-model="marqueMoteur" >
            <option v-for="marque in marqueStore.list" :key="marque.id" :value="marque.marqueId">{{ marque.nomMarque }}</option>
          </select>
          Modele du Moteur :
          <input v-model="modeleMoteur" type="text" />
          Couple du Moteur :
          <input v-model="coupleMoteur" rows="5" cols="40"/>
          Vitesse du Moteur :
          <input v-model="vitesseMaximal" type="text" />
          <button @click="addMoteur">Valider</button>
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
</style>
<script setup>
import { ref } from 'vue'
import { useMarquesStore } from '@/stores/marques.js'

const marquesStore = useMarquesStore()
const nomMarque = ref('')

function addMarque() {
  if (nomMarque.value.trim() === '') {
    alert("Le nom ne peut pas être vide !");
    return;
  }
  marquesStore.post(nomMarque.value.trim())
}

function deleteMarque(id) {
    marquesStore.deleteMarque(id)
}
</script>

<template>
  <div class="category">
    <h1>Marques</h1>

    <div class="list">
      <div>
        <h2>List :</h2>
        <div class="list" v-for="marque in marquesStore.list" :key="marque.id">
          <p>{{ marque.nomMarque }}</p>
          <button @click="deleteMarque(marque.marqueId)">supprimer</button>
        </div>
      </div>
      <div>
        <h2>Ajouter une marque :</h2>
        <label>
          Nom de la Marque :
          <input v-model="nomMarque" type="text" />
          <button @click="addMarque">Valider</button>
        </label>
      </div>
    </div>

    <div class="pagination">
      <button class="page" v-if="marquesStore.current_page > 0" @click="marquesStore.fetchMarque(0)">
        <FontAwesomeIcon :icon="faBackward" />
      </button>
      <button class="page" v-if="marquesStore.current_page > 0" @click="marquesStore.fetchMarque(marquesStore.current_page - 1)">
        <FontAwesomeIcon :icon="faArrowLeft" />
      </button>

      <div v-for="i in [3, 2, 1]" :key="i">
        <button class="page" v-if="marquesStore.current_page - i >= 0" @click="marquesStore.fetchMarque(marquesStore.current_page - i)">
          {{ marquesStore.current_page - i + 1 }}
        </button>
      </div>

      <button class="page" disabled>{{ marquesStore.current_page + 1 }}</button>

      <div v-for="i in 3" :key="i">
        <button class="page"
          v-if="marquesStore.current_page + i <= marquesStore.total_pages"
          @click="marquesStore.fetchMarque(marquesStore.current_page + i)"
        >
          {{ marquesStore.current_page + i + 1 }}
        </button>
      </div>

      <button class="page"
        v-if="marquesStore.current_page < marquesStore.total_pages"
        @click="marquesStore.fetchMarque(marquesStore.current_page + 1)"
      >
        <FontAwesomeIcon :icon="faArrowRight" />
      </button>
      <button class="page"
        v-if="marquesStore.current_page != marquesStore.total_pages"
        @click="marquesStore.fetchMarque(marquesStore.total_pages)"
      >
        <FontAwesomeIcon :icon="faForward" />
      </button>
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
</style>

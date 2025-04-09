<script setup>
import { ref } from 'vue'
import { useAccessoiresStore } from '@/stores/accessoires.js'
import { useMarquesStore } from '@/stores/marques.js'
import { useCategoriesStore } from '@/stores/category.js'

const accessoiresStore = useAccessoiresStore()
const marquesStore = useMarquesStore()
const categoriesStore = useCategoriesStore()
const marqueId = ref(15)
const categorieId = ref(8)
const nomAccessoire = ref('Chaîne de fer (170cm)')
const prixAccessoire = ref(1.00)
const descriptionAccessoire = ref('Notée /10')

function addAccessoire() {
  if (nomAccessoire.value.trim() === '') {
    alert("Le nom ne peut pas être vide !");
    return;
  }
    console.log("marque :", marqueId.value)
    console.log("categorie :", categorieId.value)
    console.log("nom :", nomAccessoire.value.trim())
    console.log("prix :", prixAccessoire.value)
    console.log("description :", descriptionAccessoire.value.trim())
  accessoiresStore.post(marqueId.value,categorieId.value,nomAccessoire.value.trim(),prixAccessoire.value,descriptionAccessoire.value.trim())
}

function deleteAccessoire(id) {
    accessoiresStore.deleteAccessoire(id)
}
</script>

<template>
    <div class="category">
        <h1>Accessoire</h1>

        <div class="list">
            <div>
                <h2>List :</h2>
                <div class="list" v-for="accessoire in accessoiresStore.list" :key="accessoire.id">
                    <p>{{ accessoire.nomAccessoire }}</p>
                    <button @click="deleteAccessoire(accessoire.accessoireId)">supprimer</button>
                </div>
                <!-- Pagination -->
                <div class="pagination">
                    <button class="button_pagination" v-if="accessoiresStore.current_page > 0" @click="accessoiresStore.fetchAccessories(0)">
                        <FontAwesomeIcon :icon="faBackward" />
                    </button>
                    <button class="button_pagination" v-if="accessoiresStore.current_page > 0" @click="accessoiresStore.fetchAccessories(accessoiresStore.current_page - 1)">
                        <FontAwesomeIcon :icon="faArrowLeft" />
                    </button>

                    <div v-for="i in [3, 2, 1]" :key="i">
                        <button class="button_pagination" v-if="accessoiresStore.current_page - i >= 0" @click="accessoiresStore.fetchAccessories(accessoiresStore.current_page - i)">
                            {{ accessoiresStore.current_page - i + 1 }}
                        </button>
                    </div>

                    <button class="button_pagination" disabled>{{ accessoiresStore.current_page + 1 }}</button>

                    <div v-for="i in 3" :key="i">
                        <button class="button_pagination" v-if="accessoiresStore.current_page + i <= accessoiresStore.total_pages" @click="accessoiresStore.fetchAccessories(accessoiresStore.current_page + i)">
                            {{ accessoiresStore.current_page + i + 1 }}
                        </button>
                    </div>

                    <button class="button_pagination" v-if="accessoiresStore.current_page < accessoiresStore.total_pages" @click="accessoiresStore.fetchAccessories(accessoiresStore.current_page + 1)">
                        <FontAwesomeIcon :icon="faArrowRight" />
                    </button>
                    <button class="button_pagination" v-if="accessoiresStore.current_page != accessoiresStore.total_pages" @click="accessoiresStore.fetchAccessories(accessoiresStore.total_pages)">
                        <FontAwesomeIcon :icon="faForward" />
                    </button>
                </div>
            </div>
            <div class="listadd">
                <h2>Ajouter un accessoire :</h2>
                <label class="add">
                    Nom de l'accessoire :
                    <input v-model="nomAccessoire" type="text" />
                    Nom de la marque de l'accessoire :
                    <select v-model="marqueId">
                        <div v-if="!marquesStore.list.length">
                            <p>Les marques ne sont pas encore chargées. Veuillez patienter...</p>
                        </div>
                        <option v-for="marque in marquesStore.list" :key="marque.id" :value="marque.marqueId">{{ marque.nomMarque }}</option>
                    </select>
                    Nom de la categorie de l'accessoire :
                    <select v-model="categorieId">
                        <div v-if="!categoriesStore.list.length">
                            <p>Les catégories ne sont pas encore chargées. Veuillez patienter...</p>
                        </div>
                        <option v-for="categorie in categoriesStore.list" :key="categorie.id" :value="categorie.categorieId">{{ categorie.libelleCategorie }}</option>
                    </select>
                    Prix de l'accessoire :
                    <input v-model="prixAccessoire" type="text" />
                    Description de l'accessoire :
                    <textarea class="contenue" v-model="descriptionAccessoire" rows="5" cols="40"></textarea>
                    <button @click="addAccessoire">Valider</button>
                </label>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.category {
  margin-left: 10%;
  margin-top: 3%;
  margin-bottom: 20%;
}
h2 {
  font-size: 30px;
  margin-top: 3%;
  margin-bottom: 3%;
}
.list {
  margin-left: 3%;
  display: flex;
  gap: 50px;
  flex-direction: row;
}
.listcont {
  margin-left: 50%;
  width: 100%;
}
p {
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
.add {
  display: flex;
  gap: 50px;
  flex-direction: column;
}
.listadd {
  margin-left: 30%;
}

.contenue {
  resize: vertical;
  min-height: 200px;
  width: 100%;
}
.pagination {
  display: flex;
  justify-content: center;
  width: 100%;
}
.button_pagination {
  margin: 10px;
  margin-bottom: 50px;
  width: 50px;
  height: 50px;
}
</style>

<script setup>
import { ref } from 'vue'
import { useVelosStore as useVelosStore } from '@/stores/velos.js'
import { useMarquesStore } from '@/stores/marques.js'
import { useCategoriesStore } from '@/stores/category.js'
import { useMoteursStore } from '@/stores/moteur.js'

const velosStore = useVelosStore()
const marquesStore = useMarquesStore()
const categoriesStore = useCategoriesStore()
const moteursStore = useMoteursStore()
const marqueId = ref(15)
const categorieId = ref(8)
const moteurId = ref(15)
const caracteristiqueVeloId = ref(8)
const nomVelo = ref('Chaîne de fer (170cm)')
const anneeVelo = ref(2019)
const tailleMin = ref(150)
const tailleMax = ref(180)
const nombreKms = ref(8594)
const prixRemise = ref(200.00)
const prixNeuf = ref(800.00)
const pourcentageReduction = ref(75)
const description = ref('Notée /10')
const quantiteVelo = ref(75)
const positionMoteur = ref("Roue arrière")
const capaciteBatterie = ref(750)

function addVelo() {
    if (nomVelo.value.trim() === '') {
        alert("Le nom ne peut pas être vide !");
        return;
    }
    console.log("marque :", marqueId.value)
    console.log("categorie :", categorieId.value)
    console.log("nom :", nomVelo.value.trim())
    velosStore.post(marqueId.value, categorieId.value, moteurId.value, caracteristiqueVeloId.value, nomVelo.value.trim(), anneeVelo.value, tailleMin.value, tailleMax.value, 
    nombreKms.value, prixRemise.value, prixNeuf.value, pourcentageReduction.value, description.value.trim(), quantiteVelo.value, positionMoteur.value.trim(), capaciteBatterie.value)
}

function deleteVelo(id) {
    velosStore.deleteVelo(id)
}
</script>

<template>
    <div class="category">
        <h1>Velo</h1>

        <div class="list">
            <div>
                <h2>List :</h2>
                <div class="list" v-for="velo in velosStore.list" :key="velo.id">
                    <p>{{ velo.nomVelo }}</p>
                    <button @click="deleteVelo(velo.veloId)">supprimer</button>
                </div>
                <!-- Pagination -->
                <div class="pagination">
                    <button class="button_pagination" v-if="velosStore.current_page > 0" @click="velosStore.fetchBikes(0)">
                        <FontAwesomeIcon :icon="faBackward" />
                    </button>
                    <button class="button_pagination" v-if="velosStore.current_page > 0" @click="velosStore.fetchBikes(velosStore.current_page - 1)">
                        <FontAwesomeIcon :icon="faArrowLeft" />
                    </button>

                    <div v-for="i in [3, 2, 1]" :key="i">
                        <button class="button_pagination" v-if="velosStore.current_page - i >= 0" @click="velosStore.fetchBikes(velosStore.current_page - i)">
                            {{ velosStore.current_page - i + 1 }}
                        </button>
                    </div>

                    <button class="button_pagination" disabled>{{ velosStore.current_page + 1 }}</button>

                    <div v-for="i in 3" :key="i">
                        <button class="button_pagination" v-if="velosStore.current_page + i <= velosStore.total_pages" @click="velosStore.fetchBikes(velosStore.current_page + i)">
                            {{ velosStore.current_page + i + 1 }}
                        </button>
                    </div>

                    <button class="button_pagination" v-if="velosStore.current_page < velosStore.total_pages" @click="velosStore.fetchBikes(velosStore.current_page + 1)">
                        <FontAwesomeIcon :icon="faArrowRight" />
                    </button>
                    <button class="button_pagination" v-if="velosStore.current_page != velosStore.total_pages" @click="velosStore.fetchBikes(velosStore.total_pages)">
                        <FontAwesomeIcon :icon="faForward" />
                    </button>
                </div>
            </div>
            <div class="listadd">
                <h2>Ajouter un velo :</h2>
                <label class="add">
                    Nom du velo :
                    <input v-model="nomVelo" type="text" />
                    Nom de la marque du velo :
                    <select v-model="marqueId">
                        <option v-for="marque in marquesStore.list" :key="marque.id" :value="marque.marqueId">{{ marque.nomMarque }}</option>
                    </select>
                    Nom de la categorie du velo :
                    <select v-model="categorieId">
                        <option v-for="categorie in categoriesStore.list" :key="categorie.id" :value="categorie.categorieId">{{ categorie.libelleCategorie }}</option>
                    </select>
                    Nom du moteur du velo :
                    <select v-model="moteurId">
                        <option v-for="moteur in moteursStore.list" :key="moteur.id" :value="moteur.moteurId">{{ moteur.modeleMoteur }}</option>
                    </select>
                    Annee de parution du velo :
                    <input v-model="anneeVelo" type="text" />
                    taille Min du velo :
                    <input v-model="tailleMin" type="text" />
                    Taille Max du velo :
                    <input v-model="tailleMax" type="text" />
                    Nombre Kms du velo :
                    <input v-model="nombreKms" type="text" />
                    Prix avec Remise du velo :
                    <input v-model="prixRemise" type="text" />
                    Prix Neuf du velo :
                    <input v-model="prixNeuf" type="text" />
                    Pourcentage de Reduction du velo :
                    <input v-model="pourcentageReduction" type="text" />
                    Quantite de Velo :
                    <input v-model="quantiteVelo" type="text" />
                    Position du Moteur du velo :
                    <input v-model="positionMoteur" type="text" />
                    Capacite de la Batterie du velo :
                    <input v-model="capaciteBatterie" type="text" />
                    Description du Velo :
                    <textarea class="contenue" v-model="descriptifVelo" rows="5" cols="40"></textarea>
                    <button @click="addVelo">Valider</button>
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

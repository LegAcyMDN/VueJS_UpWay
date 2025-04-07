<template>
    <div class="bloc-modale" v-if="revele">
      <div class="overlay" v-on:click="toggleModale"></div>
  
      <div class="modale card">
    <div v-on:click="toggleModale" class="btn-modale btn btn-danger">
      <svg width="24" height="24" stroke="#1c1535" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
    </div>

  
    <div class="modale-content">
      <h3>{{ velo.nomVelo }}</h3>
      <p>{{ velo.anneeVelo }} - {{ velo.nombreKms }} km</p>
      <h2 class="titreInspection">Rapport d'inspection complet</h2>
      <p class="butt">
        <button @click="loadInspection('Mécanique')">Mécanique</button> |
        <button @click="loadInspection('Electrique')">Électrique</button> |
        <button @click="loadInspection('Vérifications finales')">Vérifications finales</button>
      </p>

      <div>
        <div class="info" id="entête">
          <p class="critère">{{ estrealises[0].estRealiseRapportInspection.typeInspection }}</p>
          <p>Réparé / remplacé</p>
          <p>Validé</p>
        </div>
        <div class="info" v-for="(inspection) in estrealises" :key="inspection.id">
          <p class="critère">{{ inspection.estRealiseRapportInspection.pointDInspection }}</p>
          <p v-if="inspection.estRealiseReparationVelo?.checkReparation">✅</p>
          <p v-if="inspection.estRealiseReparationVelo?.checkValidation">✅</p>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useEstRealisesStore } from '@/stores/estrealises.js'
  import { useVelosStore } from '@/stores/velos'
  
  const props = defineProps({
    revele: Boolean,
    toggleModale: Function
  })
  
  const route = useRoute()
  const estrealisesStore = useEstRealisesStore()
  const velosStore = useVelosStore()
  
  const id = route.params.id
  
  const velo = ref({})
  const estrealises = ref({})
  
  onMounted(async () => {
    const v = await velosStore.getById(id)
    velo.value = v

    estrealises.value = await estrealisesStore.getByVeloId(v.veloId)
  })


  
  const loadInspection = async (type) => {
    estrealises.value = await estrealisesStore.getByVeloId(velo.value.veloId, type)
  }

  </script>
  
  
  
  <style scoped>
  .bloc-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
}

.modale-content {
  overflow-y: auto;
  height: 100%;
  padding-right: 10px;
}
  
  .btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    text-align: center;
  }
  
  .titreInspection{
    font-size: 30px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .butt{
    margin-bottom: 5%;
  }

  .info{
    display: flex;
    gap: 100px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 2;
  }
  .critère{
    width: 70%;
  }
  #entête{
    background-color: darkblue;
    color: white;
  }
  </style>
  
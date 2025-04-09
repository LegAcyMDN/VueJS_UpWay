import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoteursStore = defineStore('Moteur', () => {
    const list = ref([])
    const token = ref($cookies.get('jwt_token'))
  
    axios.get(`${window.VITE_BACKEND_URL}/Moteurs`).then((response) => {
      list.value = response.data
    })
  
    async function getById(id) {
      let entry = list.value.find((v) => v.moteurId == id)
  
      if (entry != undefined) {
        return entry
      }
  
      entry = (await axios.get(`${window.VITE_BACKEND_URL}/Moteurs/${id}`)).data
      console.log(entry)
  
      if (list.value.length >= 100) {
        list.value = [entry]
      } else {
        list.value.push(entry)
      }
  
      return entry
    }



    async function post(marque,modele, couple, vitesse) {
      if (!modele || modele.trim().length === 0) {
        console.error("Le modele du moteur est vide.");
        return;
      }
      const moteur = {
        marqueId: 20,
        modeleMoteur: modele,
        coupleMoteur : couple.concat(" nm"),
        vitesseMaximal : vitesse.concat(" km/h"),
      };
      
      try {
        await axios.post(`${window.VITE_BACKEND_URL}/Moteurs`, moteur, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
          withCredentials: true,
        });
        await fetchAll();
        console.log("Moteur créée avec succès !");
      } catch (error) {
        console.error("Erreur lors de la création :", error.response?.data || error.message);
      }
    }


    
    async function deleteMoteur(id){
      await axios.delete(`${window.VITE_BACKEND_URL}/Moteurs/${id}`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        withCredentials: true,
      });
      console.log("Moteur supprimer avec succès !");
      await fetchAll();
    }



    async function fetchAll() {
      const response = await axios.get(`${window.VITE_BACKEND_URL}/Moteurs`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        withCredentials: true,
      });
      list.value = response.data;
    }
  
    return { list, getById, post, deleteMoteur, fetchAll }
  })
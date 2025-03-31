import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('article', () => {
  const listarticle = ref([])
  const connected = ref(false)
  const nouvelart = 
  {
    titreCategorieArticle: "",
    contenuCategorieArticle : "",
    imageCategorie: "",
  }
  function ajouter(){
    axios.post(`${window.VITE_BACKEND_URL}/CategorieArticles`,this.nouvelart).then(response =>
      {
        if(response.data.console.error == true)
          {
            console.log("ptdr t'es qui")
          }
          else
            {

            }
      })
  }
  axios.get(`${window.VITE_BACKEND_URL}/CategorieArticles`).then((response) => {
    list.value = response.data
  })
  return { listarticle, connected, nouvelart, ajouter}

  async function getById(id) {
    return (await axios.get(`${window.VITE_BACKEND_URL}/CategorieArticles/GetByID/${id}`)).data
  }

  return { listarticle, getById }
})

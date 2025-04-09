<script setup>
import { ref } from 'vue'
import { useArticleStore } from '@/stores/articles.js'
import { useContentArticleStore } from '@/stores/contentarticles.js'
import { useCategorieArticleStore } from '@/stores/categoriearticles.js'
import axios from 'axios'

const articlesStore = useArticleStore()
const contentarticlesStore = useContentArticleStore()
const categoriearticlesStore = useCategorieArticleStore()
const nomArticle = ref('')
const contenueArticle = ref('')
const categorieArticle = ref('')


async function addCategorie() {
  if (nomArticle.value.trim() === '' || contenueArticle.value.trim() === '' || !categorieArticle.value) {
    console.log("Tous les champs sont obligatoires !");
    return;
  }

  try {
    const article = {
      categorieArticleId: categorieArticle.value,
    };

    const response = await axios.post(`${window.VITE_BACKEND_URL}/Articles`, article);
    const createdArticle = response.data;
    console.log("Article ajouté avec succès !");
    console.log("Id reçu :", createdArticle.articleId);

    const titreContenu = {
      articleId: createdArticle.articleId,
      typeContenu: "titre",
      contenu: nomArticle.value.trim(),
      prioriteContenu: 0
    };

    console.log("Contenu titre envoyé :", titreContenu);
    await axios.post(`${window.VITE_BACKEND_URL}/ContenuArticles`, titreContenu);

    const texteContenu = {
      articleId: createdArticle.articleId,
      typeContenu: "Texte",
      contenu: contenueArticle.value.trim(),
      prioriteContenu: 1
    };

    console.log("Contenu texte envoyé :", texteContenu);
    await axios.post(`${window.VITE_BACKEND_URL}/ContenuArticles`, texteContenu);

    console.log("Article complet ajouté avec succès !");

    articlesStore.fetchArticles(0);
    contentarticlesStore.fetchArticles(0);
  } catch (error) {
    console.error("Erreur lors de l'ajout :", error.response?.data || error.message);
    console.log("Une erreur est survenue lors de l'ajout.");
  }
}


</script>


<template>
    <div class="category">
    <h1>Article</h1>

    <div class="list">
      <div class="listadd">
        <h2>Ajouter un article :</h2>
        <label class="add">
        Categorie de l'article
          <select name="categorie" id="categorie-select" v-model="categorieArticle" >
            <option v-for="categorie in categoriearticlesStore.list" :key="categorie.id" :value="categorie.categorieArticleId">{{ categorie.titreCategorieArticle }}</option>
          </select>
          Titre de l'article :
          <input v-model="nomArticle" type="text" />
          Contenue de l'article :
          <textarea class="contenue" v-model="contenueArticle" rows="5" cols="40"></textarea>
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
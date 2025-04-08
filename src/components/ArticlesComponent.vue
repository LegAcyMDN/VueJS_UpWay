<script setup>
import { ref, watch } from 'vue'
import { toRefs } from '@vue/reactivity'
defineProps({
  article: {
    required: true,
  },
  link:
  {
    required : true,
  }
})
</script>

<template>
  <div class="articles-wrapper">
    <router-link class="article-link" :to="link">
        <div class="article-container">
            <h2 class="article-title">{{ article.titreCategorieArticle }}</h2>
            <img class="article-image" :src="article.imageCategorie" alt="Image de l'article">
        </div>
    </router-link>
  </div>
</template>

<style scoped>
/* Wrapper pour centrer les articles */
.articles-wrapper {
    display: flex; /* Utilise flexbox pour aligner les articles */
    justify-content: center; /* Centre les articles horizontalement */
    flex-wrap: wrap; /* Permet aux articles de passer à la ligne si nécessaire */
}

/* Styles pour le lien */
.article-link {
    text-decoration: none; /* Supprime le soulignement du lien */
    color: inherit; /* Hérite de la couleur du texte parent */
    width: 50%; /* Prend 50% de la largeur de la page */
    max-width: 600px; /* Largeur maximale pour éviter que ça soit trop large */
    margin: 10px; /* Marge autour de chaque article */
}

/* Conteneur principal */
.article-container {
    border: 1px solid #ddd; /* Bordure légère */
    border-radius: 8px; /* Coins arrondis */
    overflow: hidden; /* Cache les débordements */
    transition: transform 0.3s, box-shadow 0.3s; /* Animation pour l'effet de survol */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Ombre légère */
    text-align: center; /* Centre le texte à l'intérieur du conteneur */
}

/* Effet de survol */
.article-container:hover {
    transform: translateY(-5px); /* Légère élévation au survol */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Ombre plus prononcée */
}

/* Titre de l'article */
.article-title {
    font-size: 2em; /* Taille de police augmentée */
    margin: 10px; /* Marge autour du titre */
    color: #333; /* Couleur du texte */
}

/* Image de l'article */
.article-image {
    width: 100%; /* Prend toute la largeur du conteneur */
    height: auto; /* Garde les proportions de l'image */
    display: block; /* Supprime l'espace en bas de l'image */
}
</style>
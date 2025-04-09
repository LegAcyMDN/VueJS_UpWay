<template>
    <div class="div">
      <h1>Admin</h1>
      <h2 class="titrefonc">Fonctionnalité</h2>
      <div class="fonctionnalites">
        <router-link to="/admin/gestion-velo">Gestion des vélos</router-link>
        <router-link to="/admin/gestion-accessoire">Gestion des accessoires</router-link>
        <router-link to="/admin/gestion-article">Gestion des articles</router-link>
        <router-link to="/admin/gestion-categorie-article">Gestion des catégories d'articles</router-link>
        <router-link to="/admin/gestion-marque">Gestion des marques</router-link>
        <router-link to="/admin/gestion-categorie">Gestion des catégories</router-link>

      </div>
    </div>
  </template>
  
  <style scoped>
  .div {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
  }
  
  .titrefonc {
    margin-top: 3%;
    margin-bottom: 2%;
    font-size: 30px;
  }
  
  .fonctionnalites {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .fonctionnalites a {
    background-color: #f3f3f3;
    padding: 10px 15px;
    border-radius: 8px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: background-color 0.3s;
  }
  .fonctionnalites a:hover {
    background-color: #d8d8d8;
  }
  </style>
  
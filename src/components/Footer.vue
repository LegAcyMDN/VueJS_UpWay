<template>
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h2>Upway</h2>
      <p>Vélos électriques reconditionnés, testés, garantis.</p>
    </div>
    <div class="footer-section">
      <h3>Produits</h3>
      <ul>
        <router-link to="/velos"><li><a href="#">Vélos électriques</a></li></router-link>
        <router-link to="/accessoires"><li><a href="#">Accessoires</a></li></router-link>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Informations</h3>
      <ul>
        <router-link to="/articles"><li><a href="#">FAQ</a></li></router-link>
        <li><a href="#">Livraison & Retour</a></li>
        <li><a href="#">Garantie</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Suivez-nous</h3>
      <div class="socials">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    © <span id="year"></span> Upway. Tous droits réservés.
  </div>
</footer>

  </template>
  
  <script setup>
  </script>
  

  <style scoped>
  .footer {
  background-color: #4923d5;
  color: #fff;
  padding: 60px 20px;
  font-family: 'Arial', sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 40px;
}

.footer-section h2,
.footer-section h3 {
  margin-bottom: 16px;
  font-size: 1.2em;
}

.footer-section p,
.footer-section li,
.footer-section a {
  font-size: 0.9em;
  color: #aaa;
  text-decoration: none;
}

.footer-section a:hover {
  color: #fff;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.socials {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-bottom {
  border-top: 1px solid #333;
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
  font-size: 0.8em;
  color: #666;
}

</style>
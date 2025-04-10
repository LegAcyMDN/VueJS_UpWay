<script setup>
import { ref, watch } from 'vue'
import { toRefs } from '@vue/reactivity'
import router from '@/router';

const props = defineProps({
  catart: {
    required: true,
  },
  art:{
    required: true,
  },
  lists:{
  required: true,
  },
  link:
  {
    required: true,
  }
})
</script>

<template>
  <div>
    <h1>{{ catart.titreCategorieArticle }}</h1>
    <p v-if="catart.contenuCategorieArticle">{{ catart.contenuCategorieArticle }}</p>
  </div>
  <div v-if="lists && lists.length > 0">
    <div>
      <router-link :to="link"v-for="list in lists" :key="list.contenuId">
        <div >
          <p v-if="list.typeContenu === 'Titre'" class="content-title">{{ list.contenu }}</p>
          <p v-if="list.prioriteContenu === 1" >{{ list.contenu }}</p>
        </div>
      </router-link>
    </div>
  </div>
  <div v-else>Il n'y a pas d'articles dans cette catégorie<br>
<!--      ———————————No Categories?———————————<br>
⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝<br>
⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇<br>
⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀<br>
⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁⠀⠀<br>
⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉⠀⠀⠀⠀<br>
⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀<br>
⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀<br>
⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀<br>
⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>
⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>
⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>
⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>
⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>
—————————————————————————————-->
</div>
</template>

<style>
.container {
    margin: 20px;
}

.router-link {
    text-decoration: none;
}

.content-box {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.content-title {
    font-weight: bold;
    margin: 5px 0;
}

.content-priority {
    color: #ff0000;
    margin: 5px 0;
}

</style>
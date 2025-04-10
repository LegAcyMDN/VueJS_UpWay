<script setup>
const props = defineProps({
  lists:{
  required: true,
  },
})
</script>

<template>
    <router-link to="/articles" class="back-link">
        revenir à la page des actualités
    </router-link>
    <div class="content">
        <div v-for="list in lists" :key="list.id" class="list-item">
            <h2 v-if="list.typeContenu === 'Titre'" class="title">{{list.contenu}}</h2>
            <h3 v-if="list.typeContenu === 'Sous-Titre'" class="subtitle">{{ list.contenu }}</h3>
            <p v-if="list.typeContenu === 'coa_contenu'" class="content-text">{{ list.contenu }}</p>
            <li v-if="list.typeContenu === 'Li gras'" class="bold-list-item">{{ list.contenu }}</li>
            <ul v-if="list.typeContenu === 'Li'" class="list">{{ list.contenu }}</ul>
            <video v-if="list.typeContenu === 'Vidéo'" :url="list.contenu" controls allow="autoplay; encrypted-media" allowfullscreen class="video"/>
        </div>
    </div>
</template>

<style>
.back-link {
    text-decoration: none;
    color: blue;
    margin-bottom: 20px;
}

.content {
    padding: 20px;
}

.list-item {
    margin-bottom: 15px;
}

.title {
    font-size: 24px;
    font-weight: bold;
}

.subtitle {
    font-size: 20px;
    font-weight: semi-bold;
}

.content-text {
    font-size: 16px;
}

.bold-list-item {
    font-weight: bold;
}

.list {
    list-style-type: disc;
    margin-left: 20px;
}

.video {
    width: 100%;
    max-width: 600px;
    margin-top: 10px;
}
</style>
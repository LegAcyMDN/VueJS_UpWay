<script setup>
const props = defineProps({
  lists:{
  required: true,
  },
})
</script>

<template>
    <router-link to="/articles">
        revenir à la page des actualités
    </router-link>
    <div>
        <div v-for="list in lists">
            <h2 v-if="list.typeContenu === 'Titre'">{{list.contenu}}</h2>
            <h3 v-if="list.typeContenu === 'Sous-Titre'">{{ list.contenu }}</h3>
            <p v-if="list.typeContenu === 'coa_contenu'">{{ list.contenu }} <p v-if="list.typeContenu === 'Lien'">{{ list.contenu }}</p></p>
            <li v-if="list.typeContenu === 'Li gras'">{{ list.contenu }}</li>
                <ul v-if="list.typeContenu === 'Li'">{{ list.contenu }}</ul>
            <video v-if="list.typeContenu === 'Vidéo'" :url="list.contenu" controls allow="autoplay; encrypted-media" allowfullscreen/>
        </div>
    </div>
</template>
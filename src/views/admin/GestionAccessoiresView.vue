<script>
import { ref } from 'vue'
import { useAccessoiresStore } from '@/stores/accessoires.js'

const accessoiresStore = useAccessoiresStore()
const marqueId = ref('')
const categorieId = ref('')
const nomAccessoire = ref('')
const prixAccessoire = ref('')
const descriptionAccessoire = ref('')

function addAccessoire() {
  if (nomAccessoire.value.trim() === '') {
    alert("Le nom ne peut pas être vide !");
    return;
  }
  categoriearticlesStore.post(nomCategorie.value.trim(),contenueCategorie.value.trim(),urlPhotoCategorie.value.trim())
}

function deleteAccessoire(id) {
    categoriearticlesStore.deleteCategorie(id)
}

</script>


<template>
    
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
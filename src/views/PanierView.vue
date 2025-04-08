<script setup>
import { onMounted } from 'vue'
import Panier from '@/components/Panier.vue'
import { usePanierStore} from '@/stores/paniers'

const paniers = usePanierStore()
</script>

<template>
    <main>
        <div id="panier-container" style="margin: 15% 4.5%;">
            <div id="void-panier" v-if="paniers.panier == undefined || paniers.panier.listeAjouterAccessoires == undefined || paniers.panier.listeAjouterAccessoires.length === 0">
                <h2>Panier vide</h2>
                <div id="h-panier">
                    <span>Votre panier est vide !</span>
                </div>
                <div id="but-panier">
                    <router-link to="/velos" style="text-decoration: none; color: white; font-style: normal;">
                        CONTINUER VOTRE SHOPPING
                    </router-link>
                </div>
            </div>
            <div id="fill-panier" v-else>
                <h2>Mon panier</h2>
                <Panier :panier="paniers.panier"/>
            </div>
        </div>

        <div id="container-carrousel" style="margin: 0 15%;">
            <div id="carrousel-acs">
                <div id="entete-car">
                    <div id="titre-car">
                        <router-link to="/accessoires" style="text-decoration: none; color: black;">
                            <h2>Compléter votre panier avec nos accessoires !</h2>
                        </router-link>
                    </div>
                    <div id="curseur-car">
                        <div id="curseur-left">
                            <div id="left">
                                <svg class="caroussel-left-arrow" focusable="false" aria-hidden="true" viewBox="0 0 24 24" height="24" width="24" fill="white">
                                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                                </svg>
                            </div>
                        </div>
                        <div id="curseur-right">
                            <div id="right">
                                <svg class="caroussel-right-arrow" focusable="false" aria-hidden="true" viewBox="0 0 24 24" height="24" width="24" fill="white">
                                    <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="carrousel-track">
                    <!--A finir-->
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
#void-panier, #fill-panier {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    height: 50vh;
    text-align: center;
}

#but-panier {
    background-color: rgba(71, 51, 255, 1);
    padding: 12px 20px 10px 20px;
    border-radius: 25px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
}

#entete-car {
    display: flex;
    justify-content: space-between;
}

#curseur-car {
    display: flex;
    gap: 25px;
}

#left, #right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: rgba(71, 51, 255, 1);
    border-radius: 50%;
}
</style>
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useArticleStore = defineStore('article',() =>{
    const listarticle =ref([
  {
    "caa_titre": "À propos d'Upway",
    "caa_contenue": "Découvrez notre mission, nos valeurs et notre engagement pour vous proposer la meilleure expérience d'acquisition d'un vélo électrique reconditionné.",
    "caa_image": "https://help.upway.fr/cdn-cgi/image/quality=75,width=2048/https://attachments.gorgias.help/x0oj/hc/k8pn/web_012_upway-warehouse-2d4af6c4-959a-4120-bee7-521b2460ed48-a0f99688-d0b5-46d5-b543-f54f0da4bd2c.jpeg"
  },
  
  {
    "caa_titre": "Choisir son vélo",
    "caa_contenue": "Tous nos conseils pour trouver le vélo qui vous convient parfaitement.",
    "caa_image": "https://help.upway.fr/cdn-cgi/image/quality=75,width=2048/https://attachments.gorgias.help/x0oj/hc/k8pn/2023_10_11_upway_set_13%20-%20light-6164addb-5caf-483a-b406-987c41881fd8.jpg"
  },
  
  {
    "caa_titre": "Passer Commande",
    "caa_contenue": null,
    "caa_image": "https://help.upway.fr/cdn-cgi/image/quality=75,width=2048/https://attachments.gorgias.help/x0oj/hc/k8pn/copy%20of%20upway_warehouse_010-f30ba63b-fbc6-4937-9018-03642e384467.jpg"
  },
  
  {
    "caa_titre": "Méthodes de paiement et subventions",
    "caa_contenue": null,
    "caa_image": "https://help.upway.fr/cdn-cgi/image/quality=75,width=1920/https://attachments.gorgias.help/x0oj/hc/k8pn/payments-2c1abdb1-4612-46da-a4de-3db246b82437.png"
  },
  
  {
    "caa_titre": "Livraison",
    "caa_contenue": null,
    "caa_image": "https://help.upway.fr/cdn-cgi/image/quality=75,width=2048/https://attachments.gorgias.help/x0oj/hc/k8pn/purchasing%20on%20upway-fa5cf239-0f36-4d8b-a2ea-9b1f6c2b1b2b.png"
  },
  
  {
    "caa_titre": "Retours et remboursements",
    "caa_contenue": null,
    "caa_image": "https://help.upway.fr/cdn-cgi/image/quality=75,width=2048/https://attachments.gorgias.help/x0oj/hc/k8pn/returns-79faade6-72fc-4755-8a22-9722cce8aadf.png"
  },
  
  {
    "caa_titre": "Garantie et assurance",
    "caa_contenue": null,
    "caa_image": "https://help.upway.fr/cdn-cgi/image/quality=75,width=2048/https://attachments.gorgias.help/x0oj/hc/k8pn/copy%20of%20upway_lifestyle_002_mtb_specialized-d4ade892-0ebc-4060-af36-7a355022c827.jpg"
  },
  
  {
    "caa_titre": "Service après-vente",
    "caa_contenue": null,
    "caa_image": "https://help.upway.fr/cdn-cgi/image/quality=75,width=2048/https://attachments.gorgias.help/x0oj/hc/k8pn/web_011_upway-warehouse-21c93462-a122-43eb-b83c-f40644b7e1f0.jpg"
  },
  
  {
    "caa_titre": "Gérer mon contrat d'assurance",
    "caa_contenue": null,
    "caa_image": "https://help.upway.fr/cdn-cgi/image/quality=75,width=1920/https://attachments.gorgias.help/x0oj/hc/k8pn/copy%20of%20upway_lifestyle_15_cargo_babboe-a1b448ef-b2af-45f9-9923-be67acb7e 377.jpg"
  },
  
  {
    "caa_titre": "J'ai besoin de documents additionnels",
    "caa_contenue": null,
    "caa_image": "https://help.upway.fr/cdn-cgi/image/quality=75,width=2048/https://attachments.gorgias.help/x0oj/hc/k8pn/copy%20of%20upway_warehouse_007-ee534beb-846c-4184-a129-85d52d08c9f1.jpg"
  }
])
return {listarticle}
})
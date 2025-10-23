<template>
  <div v-show="pageOn == false">
    <h1 class="text-center content-center font-bold text-6xl p-5">Eltic entreprise</h1>
  </div>
  <Card v-if="pageOn == false" v-for="(_, services) in listeService" :key="services" :title="listeService[services]"
    :libelle="listeServiceLibelle[services]" :image="listeImageService[services]" :description="listeDescription[services]"
    @click="(p) => passePage(listeService[services], p)" /> 
  <div v-else-if="ServiceActuelle == 'ElticBorne'">
    <NavBorne @retour="pageOn = false" />
    <Footer />
  </div>
  <div v-else-if="ServiceActuelle == 'ElticVideo'">
    <NavVideo @retour="pageOn = false" />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'
import NavBorne from '../components/NavBorne.vue'
import NavVideo from '../components/NavVideo.vue'

let ServiceActuelle = ''

const listeService = ['ElticBorne', 'ElticVideo']

const listeServiceLibelle = ['Eltic : Borne de recharge', 'Eltic : Video protection']

const listeImageService = ['../eltic+voiture-electrique020.png', '#']

const listeDescription = [" Installateur de bornes de recharge pour véhicules électriques et véhicules hybrides rechargeables. Architecte d'Infrastructures collectives de Recharge pour Véhicules Électriques. Installateur d'IRVE collectives en immeubles d'habitation et en copropriétés ", " Installateur de systèmes de vidéo-protection pour les professionnels et les copropriétés. Installateur de caméras de vidéo-surveillance pour les particuliers "]

let pageOn = ref(false)

function passePage(val, val2) {
  pageOn.value = val
  ServiceActuelle = val2
}
</script>

<style>
@import 'tailwindcss';
</style>

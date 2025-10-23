<template>
  <div v-show="pageOn == false">
    <h1 class="text-center content-center font-bold text-6xl p-5">Eltic entreprise</h1>
  </div>
  <Card v-if="pageOn == false" v-for="(_, services) in listeService" :key="services" :title="listeService[services]"
    :libelle="listeServiceLibelle[services]" :image="listeImageService[services]"
    :description="listeDescription[services]" @click="(p) => passePage(listeService[services], p)" />
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

const listeDescription = [" Installateur de <span class='font-bold text-shadow-lg'>bornes de recharge</span > pour véhicules <span class='font-bold text-shadow-lg'>électriques et hybrides rechargeables</span>.<br><span class='font-bold text-shadow-lg'>Architecte d'Infrastructures collectives</span> de Recharge pour Véhicules Électriques. <br>Installateur <span class='font-bold text-shadow-lg'>d'IRVE</span> collectives en <span class='font-bold text-shadow-lg'>immeubles</span> d'habitation et en <span class='font-bold text-shadow-lg'>copropriétés</span> ", " Installateur de systèmes de <span class='font-bold text-shadow-lg'>vidéo-protection</span> pour les <span class='font-bold text-shadow-lg'>professionnels</span> et les <span class='font-bold text-shadow-lg'>copropriétés</span>. <br>Installateur de caméras de <span class='font-bold text-shadow-lg'>vidéo-surveillance</span> pour les particuliers "]

let pageOn = ref(false)

function passePage(val, val2) {
  pageOn.value = val
  ServiceActuelle = val2
}
</script>

<style>
@import 'tailwindcss';
</style>

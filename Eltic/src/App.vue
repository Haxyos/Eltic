<template>
  <div v-show="pageOn == false">
    <h1 class="text-center content-center font-bold text-6xl p-5">Eltic entreprise</h1>
  </div>
  <Card
    v-if="pageOn == false"
    v-for="(_, services) in listeService"
    :key="services"
    :title="listeService[services]"
    :libelle="listeServiceLibelle[services]"
    :image="listeImageService[services]"
    @click="(p) => passePage(listeService[services], p)"
  />
  <div v-else-if="ServiceActuelle == 'ElticBorne'">
    <NavBorne />
    <Footer />
  </div>
  <div v-else-if="ServiceActuelle == 'ElticVideo'">
    <NavVideo />
    <ElticVideo />
    <Footer />
  </div>
  <button @click="passePage(false)">test retour</button>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'
import NavBorne from '../components/NavBorne.vue'
import NavVideo from '../components/NavVideo.vue'
import ElticBorne from './ElticBorne.vue'
import ElticVideo from './ElticVideo.vue'

let ServiceActuelle = ''

const listeService = ['ElticBorne', 'ElticVideo']

const listeServiceLibelle = ['Eltic : Borne de recharge', 'Eltic : Video protection']

const listeImageService = ['../eltic+voiture-electrique020.png', '#']

let pageOn = ref(false)
const composantActuel = ref(null)

function passePage(val, val2) {
  pageOn.value = val
  ServiceActuelle = val2
}
</script>

<style>
@import 'tailwindcss';
</style>

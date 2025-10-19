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
    @true="(p) => passePage(true, p)"
    @false="(p) => passePage(false, p)"
  />
  <div v-else-if="ServiceActuelle == 'ElticBorne'">
    <NavBorne />
    <ElticBorne />
  </div>
  <div v-else-if="ServiceActuelle == 'ElticVideo'">
    <NavVideo />
    <ElticVideo />
  </div>
  <button @click="passePage(false)">test retour</button>
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'
import NavBorne from '../components/NavBorne.vue'
import NavVideo from '../components/NavVideo.vue'
import ElticBorne from '../components/ElticBorne.vue'
import ElticVideo from '../components/ElticVideo.vue'

let ServiceActuelle = ''

const listeService = ['ElticBorne', 'ElticVideo']

const listeServiceLibelle = ['Eltic : Borne de recharge', 'Eltic : Video protection']

const listeImageService = ['../eltic+voiture-electrique020.png', '#']

let pageOn = ref(false)

function passePage(val, val2) {
  pageOn.value = val
  ServiceActuelle = val2
}
</script>

<style>
@import 'tailwindcss';
</style>

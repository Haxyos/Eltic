<template>
  <div v-show="pageOn == false">
    <h1 class="text-center content-center font-bold text-6xl p-5">Eltic entreprise</h1>
  </div>
  <Card v-if="pageOn == false" v-for="(_,services) in listeService" :key="services" :title="listeService[services]" :libelle="listeServiceLibelle[services]" :image="listeImageService[services]" @true="passePage(true)" @false="passePage(true)"/>
  <NavBorne v-else/>
  <button @click="passePage(false)"> test retour </button>
  <Footer />
</template>

<script setup>
import {ref, watch} from 'vue'
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'
import NavBorne from '../components/NavBorne.vue'


const listeService = [
    'ElticBorne',
    'ElticVideo'
]

const listeServiceLibelle = [
    "Eltic : Borne de recharge",
    "Eltic : Video protection"
]

const listeImageService = [
    "../eltic+voiture-electrique020.png",
    "#"
]

let pageOn = ref(false);


function passePage(val){
  pageOn.value = val
  console.log(pageOn)
}


</script>

<style>
@import "tailwindcss";
</style>
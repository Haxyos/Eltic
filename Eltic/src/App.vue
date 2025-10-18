<template>
  <div>
    <h1 class="text-center content-center font-bold text-6xl p-5">Eltic entreprise</h1>
  </div>
  <Card v-for="(_,services) in listeService" :title="listeService[services]" :libelle="listeServiceLibelle[services]" :image="listeImageService[services]"/>
  <Footer />
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'


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


</script>

<style>
@import "tailwindcss";
</style>
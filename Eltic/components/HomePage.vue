<template>
  <div>
    <h1 class="text-center content-center font-bold text-6xl p-5">Eltic entreprise</h1>
  </div>
  <RouterLink to="/ElticBorne">
    <Card
      :title="listeService[0]"
      :libelle="listeServiceLibelle[0]"
      :image="listeImageService[0]"
      :description="listeDescription[0]"
    />
  </RouterLink>
  <RouterLink to="/ElticVideo">
    <Card
      :title="listeService[1]"
      :libelle="listeServiceLibelle[1]"
      :image="listeImageService[1]"
      :description="listeDescription[1]"
    />
  </RouterLink>
</template>

<script setup>
import Card from '../components/Card.vue'

const listeService = ['ElticBorne', 'ElticVideo']

const listeServiceLibelle = ['Eltic : Borne de recharge', 'Eltic : Video protection']

const listeImageService = ['../eltic+voiture-electrique020.png', '#']

const listeDescription = [
  " Installateur de <span class='font-bold text-shadow-lg'>bornes de recharge</span > pour véhicules <span class='font-bold text-shadow-lg'>électriques et hybrides rechargeables</span>.<br><span class='font-bold text-shadow-lg'>Architecte d'Infrastructures collectives</span> de Recharge pour Véhicules Électriques. <br>Installateur <span class='font-bold text-shadow-lg'>d'IRVE</span> collectives en <span class='font-bold text-shadow-lg'>immeubles</span> d'habitation et en <span class='font-bold text-shadow-lg'>copropriétés</span> ",
  " Installateur de systèmes de <span class='font-bold text-shadow-lg'>vidéo-protection</span> pour les <span class='font-bold text-shadow-lg'>professionnels</span> et les <span class='font-bold text-shadow-lg'>copropriétés</span>. <br>Installateur de caméras de <span class='font-bold text-shadow-lg'>vidéo-surveillance</span> pour les particuliers ",
]
</script>

<style>
@import 'tailwindcss';
</style>

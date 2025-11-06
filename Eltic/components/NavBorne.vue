<template>
  <div class="absolute left-0">
    <button @click="emission"><img class="h-15 w-15 cursor-pointer" src="../public/left-arrow-circle-svgrepo-com.svg"
        alt="left arrow"></img></button>
  </div>
  <div class="flex bg-green-600 content-center justify-center items-center p-2">

    <button class="cursor-pointer p-3 mx-1 hover:shadow-2xl hover:drop-shadow-2xl duration-200 rounded-2xl" v-for="(_, tab) in listeComposant" :key="tab"
      @click="ComposantActuel = tab">
      {{ listeRoute[tab] }}
    </button>
  </div>
  <component :is="listeComposant[ComposantActuel]"></component>
  
</template>

export default {};

<script setup>
import { ref } from 'vue'
import MainMenu from '@/ElticBorne.vue'
import Copropriété from './Copropriété.vue'
import NosRéalisation from './nosReal.vue'
import Recharge from './Recharge.vue'
import Qualification from './Qualification.vue'
import Devis from './Devis.vue'

const ComposantActuel = ref('ElticBorne')

const listeComposant = {
  ElticBorne: MainMenu,
  Copropriété,
  NosRéalisation,
  Recharge,
  Qualification,
  Devis,
}

const listeLibelle = {
  ElticBorne: 'Accueil',
  Copropriété: 'Copropriété',
  NosRéalisation: 'Nos Réalisations',
  Recharge: 'La Recharge',
  Qualification: 'Qualification',
  Devis: 'Devis',
}

const listeRoute = [
  '<router-link to="/ElticBorne">Accueil</router-link>',
  '<router-link to="/Copropriété">Copropriété</router-link>',
  '<router-link to="/nosReal">Nos Réalisation</router-link>',
  '<router-link to="/Recharge">La Recharge</router-link>',
  '<router-link to="/Qualification">Qualification</router-link>',
  '<router-link to="/Devis">Devis</router-link>'
]

const emits = defineEmits([
  'retour'
])
function emission() {
  emits('retour');
}
</script>

<style>
@import 'tailwindcss';
</style>

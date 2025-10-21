<template>
  <div class="flex bg-green-700 content-center justify-center items-center">
    <button
      class="cursor-pointer p-5 mx-1"
      v-for="(_, tab) in listeComposant"
      :key="tab"
      @click="ComposantActuel = tab"
    >
      {{ listeLibelle[tab] }}
    </button>
  </div>
  <component :is="listeComposant[ComposantActuel]"></component>
</template>

export default {};

<script setup>
import { ref, watch } from 'vue'
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
</script>

<style></style>
